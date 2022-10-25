import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Booking } from '@trip-kaizen-sor-workspace/shared-lib';
import { Subject, Observable, EMPTY, BehaviorSubject } from 'rxjs';
import { map, takeUntil, switchMap } from 'rxjs/operators';
import { BookingStatisticsService } from '../services/booking-statistics.service';

declare const Plotly: any;

@Component({
  selector: 'trip-kaizen-sor-workspace-booking-statistics-chart',
  templateUrl: './booking-statistics-chart.component.html',
  styleUrls: ['./booking-statistics-chart.component.css']
})
export class BookingStatisticsChartComponent implements OnInit, OnDestroy {

  private _bookingStatisticsService =  inject(BookingStatisticsService);
  private _destroy$ = new Subject<void>();

  restaurantBookings$: Observable<Booking[]> = EMPTY;
  hotelBookings$: Observable<Booking[]> = EMPTY;

  addedRestaurants$ = new BehaviorSubject<Booking[]>([])
  addedHotels$ = new BehaviorSubject<Booking[]>([])

  ngOnInit(): void {
   const bookings$ = this._bookingStatisticsService.fetchAll();

   this.restaurantBookings$ = bookings$.pipe(
    map(bs => this._buildRestaurantBookingsList(bs)),
    switchMap(bs => this.addedRestaurants$.pipe(map(added => added.concat(bs))))
   )

   this.hotelBookings$ = bookings$.pipe(
    map(bs => this._buildHotelBookingsList(bs)),
    switchMap(bs => this.addedHotels$.pipe(map(added => added.concat(bs))))
   )

   bookings$.pipe(
    takeUntil(this._destroy$)
   ).subscribe(
    bookings => {
      this._buildChart(bookings)
    }
   );
  }

  ngOnDestroy() {
    this._destroy$.next()
    this._destroy$.complete()
  }

  private _buildRestaurantBookingsList(bookings: Booking[]): Booking[] {
    return bookings.filter(b => b.type === 'restaurant');
  }

  private _buildHotelBookingsList(bookings: Booking[]): Booking[] {
    return bookings.filter(b => b.type === 'hotel');
  }

  private _buildChart(bookings: Booking[]) {
   const {data, layout, config} = {
      data: [ this._buildData(bookings) ],
      layout: { 
        title: 'Bookings',
        font: {size: 18}
      },
      config: {responsive: true}
    }

    Plotly.newPlot('chart', data, layout, config);
  }

  private _buildData(bookings: Booking[]) {
    const trace: any = {
      type: 'bar',
      x: [],
      y: [],
      marker: {
          color: '#C8A2C8',
          line: {
              width: 2.5
          }
      }
    };

    Array.from(bookings.reduce((prev: Map<string, number>, curr: Booking) => {
      const iso = curr.date.toISOString()
      prev.set(iso, prev.get(iso) ? (prev.get(iso) as number) + 1 : 1)
      return prev;
    }, new Map<string, number>()), ([date, value]) => ({date: new Date(date), value}))
    .sort((a, b) => a.date.getMilliseconds() - b.date.getMilliseconds())
    .forEach(obj => {
      trace.x.push(obj.date.toISOString());
      trace.y.push(obj.value)
    })
    return trace;
  }
}

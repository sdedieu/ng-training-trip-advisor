import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '@trip-kaizen-sor-workspace/shared-lib';
import { Observable } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingStatisticsService {

  private _cachedBookings$!: Observable<Booking[]>;

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Booking[]> {
    if(!this._cachedBookings$) {
      this._cachedBookings$ = this.http.get<Booking[]>('/bookings').pipe(
        map(bs => bs.map(b => ({...b, date: new Date(b.date)}))),
        shareReplay(1)
      )
    }
    return this._cachedBookings$;
  }
}

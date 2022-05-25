import { Component, OnInit } from '@angular/core';
import { tap, debounceTime, switchMap, catchError, shareReplay, map, scan, mergeMap, filter } from 'rxjs/operators';
import { Observable, of, BehaviorSubject, EMPTY } from 'rxjs';
import { Hotel } from '../models/hotel';
import { HotelSearchService } from '../services/hotel-search.service';

@Component({
  selector: 'tks-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css'],
})
export class HotelSearchComponent implements OnInit {
  hotels$: Observable<Hotel[]> = EMPTY;
  search = '';
  urgent = false;
  isLoading$ = new BehaviorSubject<boolean>(false);
  search$ = new BehaviorSubject<string>('');
  page$ = new BehaviorSubject<number>(1);
  limit = 12;

  constructor(
    private hotelSearchService: HotelSearchService
  ) { }

  ngOnInit(): void {
    this.isLoading$.next(true);
    this.hotels$ = this.page$.pipe(
      filter(page => page < 4),
      tap(() => this.isLoading$.next(true)),
      mergeMap(page => this.hotelSearchService.find('', page, this.limit, this.urgent).pipe(
        catchError(() => of([]))
      )),
      scan((all: Hotel[], curr: Hotel[]) => all.concat(curr), []),
      switchMap(hotels => this.search$.pipe(
        tap(() => this.isLoading$.next(true)),
        map(search => hotels.filter(hotel => hotel.name.toLowerCase().includes(search.toLowerCase()))),
        tap(() => this.isLoading$.next(false)),
      ))
    );
  }

  dispatchSearch() {
    this.search$.next(this.search);
  }

  onScroll() {
    this.page$.next(this.page$.value + 1);
  }
}

import { Component, OnInit } from '@angular/core';
import {  tap, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Hotel } from '../models/hotel';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'tks-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css'],
})
export class HotelSearchComponent implements OnInit {
  hotels$: Observable<Hotel[]> = of([]);
  search = '';
  urgent = false;
  isLoading$ = new BehaviorSubject<boolean>(false);
  search$ = new BehaviorSubject<string>('');

  constructor(
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit', this.urgent);
    this.hotels$ = this.search$.pipe(
      tap(() => this.isLoading$.next(true)),
      debounceTime(500),
      switchMap(search => this.hotelService.find(search, search, this.urgent).pipe(
        catchError(() => of([]))
      )),
      tap(() => this.isLoading$.next(false))
    );
  }

  dispatchSearch()  {
    this.search$.next(this.search);
  }
}

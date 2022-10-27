import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { tap, switchMap, map, debounceTime } from 'rxjs/operators';
import { Observable, BehaviorSubject, EMPTY, Subject } from 'rxjs';
import { Hotel } from '../models/hotel';
import { Store } from '@ngrx/store'
import * as HotelSearchingActions from '../hotel/hotel.actions';
import { selectHotels } from '../hotel/hotel.selectors';

@Component({
  selector: 'tks-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['./hotel-search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelSearchComponent implements OnInit {
  hotels$: Observable<Hotel[]> = EMPTY;
  search = '';
  isLoading$ = new BehaviorSubject<boolean>(true);
  search$ = new BehaviorSubject<string>('');
  page = 1;
  limit = 12;

  total: number | null = null
  destroyed$ = new Subject<void>();

  private _store = inject(Store);

  ngOnInit(): void {
     this.isLoading$.next(true)
  
    this.hotels$ = this._store.select(selectHotels).pipe(
      switchMap(hotels => this.search$.pipe(
        debounceTime(500),
        tap(() => this.isLoading$.next(true)),
        map(search => hotels.filter(hotel => hotel.name.toLowerCase().includes(search.toLowerCase()))),
        tap(() => this.isLoading$.next(false)),
      ))
    );

    this.dispatchSearch()
  }

  dispatchSearch() {
    this._store.dispatch(HotelSearchingActions.loadHotels({
      page: this.page,
      limit: this.limit
    }));
  }

  onScroll() {
    if (this.total === null || this.page < Math.floor(this.total / this.limit)) {
      this.page += 1;
      this.dispatchSearch()
    }
  }
}

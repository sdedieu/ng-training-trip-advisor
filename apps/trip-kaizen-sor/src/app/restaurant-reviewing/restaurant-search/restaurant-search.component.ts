import { Component, OnInit, inject } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, of } from 'rxjs';
import { Restaurant } from '../models/restaurant';
import { Store } from '@ngrx/store';
import { selectIsLoading, selectFilteredRestaurants , State, loadRestaurants, savePrices } from '../+state';

@Component({
  selector: 'tks-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.css'],
})
export class RestaurantSearchComponent implements OnInit {
  restaurants$: Observable<Restaurant[]> = of([]);
  search = '';
  urgent = false;
  isLoading$: Observable<boolean> = EMPTY;
  search$ = new BehaviorSubject<string>('');
  
  private _store = inject(Store<State>);

  ngOnInit(): void {
    this.isLoading$ = this._store.select(selectIsLoading);
    this.restaurants$ = this._store.select(selectFilteredRestaurants)

    this.dispatchSearch()
  }

  dispatchSearch() {
    this._store.dispatch(loadRestaurants({ search: this.search, urgent: this.urgent }));
  }

  dispatchSelectedPrices(prices: number[]) {
    this._store.dispatch(savePrices({ prices }));
}
}

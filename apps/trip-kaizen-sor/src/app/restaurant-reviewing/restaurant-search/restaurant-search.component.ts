import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, debounceTime, Observable, of, switchMap, tap } from 'rxjs';
import { Restaurant } from '../models/restaurant';
import { RestaurantSearchService } from '../services/restaurant-search.service';

@Component({
  selector: 'tks-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.css'],
})
export class RestaurantSearchComponent implements OnInit {
  restaurants$: Observable<Restaurant[]> = of([]);
  search = '';
  urgent = false;
  isLoading$ = new BehaviorSubject<boolean>(false);
  search$ = new BehaviorSubject<string>('');

  constructor(private restaurantSearchService: RestaurantSearchService) {}

  ngOnInit(): void {
    this.restaurants$ = this.search$.pipe(
      tap(() => this.isLoading$.next(true)),
      debounceTime(500),
      switchMap(search => this.restaurantSearchService.find(search, this.urgent).pipe(
        catchError(() => of([]))
      )),
      tap(() => this.isLoading$.next(false))
    );
  }

  dispatchSearch()  {
    this.search$.next(this.search);
  }
}

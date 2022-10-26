import { Component, inject, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, EMPTY, Observable, of } from 'rxjs';
import { switchMap, tap, catchError } from 'rxjs/operators';
import { Restaurant } from '../../../../../../libs/restaurant-search-lib/src/lib/models/restaurant';
import { RestaurantSearchService } from '@trip-kaizen-sor-workspace/restaurant-search-lib';

@Component({
  selector: 'tks-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.css'],
})
export class RestaurantSearchComponent implements OnInit {
  restaurants$: Observable<Restaurant[]> = EMPTY;
  search = '';
  urgent = false;
  isLoading$ = new BehaviorSubject<boolean>(false);
  search$ = new BehaviorSubject<string>('');

  restaurantSearchService = inject(RestaurantSearchService);

  ngOnInit(): void {
    this.restaurants$ = this.search$.pipe(
      tap(() => this.isLoading$.next(true)),
      debounceTime(500),
      switchMap((search: string) => this.restaurantSearchService.find(search, this.urgent).pipe(
        catchError(() => of([]))
      )),
      tap(() => this.isLoading$.next(false))
    );
  }

  dispatchSearch()  {
    this.search$.next(this.search);
  }
}

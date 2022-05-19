import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, debounceTime, Observable, of, switchMap, tap } from 'rxjs';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurant.service';

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

  constructor(private restaurantSerivce: RestaurantService) {}

  ngOnInit(): void {
    console.log('ngOnInit', this.urgent);
    this.restaurants$ = this.search$.pipe(
      tap(() => this.isLoading$.next(true)),
      debounceTime(500),
      switchMap(search => this.restaurantSerivce.find(search, this.urgent).pipe(
        catchError(() => of([]))
      )),
      tap(() => this.isLoading$.next(false))
    );
  }

  dispatchSearch()  {
    this.search$.next(this.search);
  }
}

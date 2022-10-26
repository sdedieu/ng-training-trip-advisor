import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as RestaurantReviewingActions from './restaurant-reviewing.actions';
import { RestaurantSearchService } from '../services/restaurant-search.service';

@Injectable()
export class RestaurantReviewingEffects {

constructor(private actions$: Actions, private restaurantSearchService: RestaurantSearchService) {}

loadRestaurants$ = createEffect(() => this.actions$.pipe(
  ofType(RestaurantReviewingActions.loadRestaurants),
  debounceTime(500),
  switchMap(action => this.restaurantSearchService.find(action.search, action.urgent).pipe(
    map(restaurants => RestaurantReviewingActions.restaurantsLoaded({ restaurants })),
    catchError(() => of(RestaurantReviewingActions.loadRestaurantsFailure()))
  ))
));
}

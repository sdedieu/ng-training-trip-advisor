import { createAction, props } from '@ngrx/store';
import { Restaurant } from '../models/restaurant';

export const loadRestaurants = createAction(
  '[RestaurantReviewing] Load Restaurants',
  props<{ search: string, urgent: boolean }>()
);

export const restaurantsLoaded = createAction(
  '[RestaurantReviewing] Restaurants Loaded',
  props<{ restaurants: Restaurant[] }>()
);

export const loadRestaurantsFailure = createAction(
  '[RestaurantReviewing] Load Restaurants Failure'
);               

export const savePrices = createAction(
  '[RestaurantReviewing] Save Prices',
  props<{ prices: number[] }>()
);   






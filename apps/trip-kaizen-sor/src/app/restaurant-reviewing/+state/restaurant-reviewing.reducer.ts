import { createReducer, on } from '@ngrx/store';
import * as RestaurantReviewingActions from './restaurant-reviewing.actions';
import { Restaurant } from '../models/restaurant';

export const restaurantReviewingFeatureKey = 'restaurantReviewing';

export interface State {
  restaurants: Restaurant[];
  isLoading: boolean;
  prices: number[];
}

export const initialState: State = {
  restaurants: [],
  isLoading: false,
  prices: []
};

export const reducer = createReducer(
  initialState,

  on(RestaurantReviewingActions.loadRestaurants, state => ({...state, isLoading: true})),

  on(RestaurantReviewingActions.restaurantsLoaded, (state, action) => ({...state, restaurants: action.restaurants, isLoading: false})),
  
  on(RestaurantReviewingActions.loadRestaurantsFailure, state => ({...state, isLoading: false})),

  on(RestaurantReviewingActions.savePrices, (state, action) => ({...state, prices: action.prices})),

);

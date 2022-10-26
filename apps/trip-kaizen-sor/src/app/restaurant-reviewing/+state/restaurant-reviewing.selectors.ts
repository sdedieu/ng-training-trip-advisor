import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRestaurantReviewing from './restaurant-reviewing.reducer';

export const selectRestaurantReviewingState = createFeatureSelector<fromRestaurantReviewing.State>(
  fromRestaurantReviewing.restaurantReviewingFeatureKey
);
export const selectRestaurants = createSelector(
  selectRestaurantReviewingState,
  state => state.restaurants
);

export const selectIsLoading = createSelector(
  selectRestaurantReviewingState,
  state => state.isLoading
);

export const selectPrices = createSelector(
  selectRestaurantReviewingState,
  state => state.prices
);

export const selectFilteredRestaurants = createSelector(
  selectRestaurants,
  selectPrices,
  (restaurants, prices) => prices.length ? restaurants.filter(restaurant => prices.includes(restaurant.price)) : restaurants
);
import * as fromRestaurantReviewing from './restaurant-reviewing.reducer';
import { selectRestaurantReviewingState } from './restaurant-reviewing.selectors';

describe('RestaurantReviewing Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRestaurantReviewingState({
      [fromRestaurantReviewing.restaurantReviewingFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RestaurantReviewingEffects } from './restaurant-reviewing.effects';

describe('RestaurantReviewingEffects', () => {
  let actions$: Observable<any>;
  let effects: RestaurantReviewingEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RestaurantReviewingEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(RestaurantReviewingEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

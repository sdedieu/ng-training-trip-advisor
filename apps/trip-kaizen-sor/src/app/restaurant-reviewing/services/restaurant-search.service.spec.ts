import { TestBed } from '@angular/core/testing';

import { RestaurantSearchService } from './restaurant-search.service';

describe('RestaurantService', () => {
  let service: RestaurantSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

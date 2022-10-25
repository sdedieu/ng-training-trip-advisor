import { TestBed } from '@angular/core/testing';

import { BookingStatisticsService } from './booking-statistics.service';

describe('BookingStatisticsService', () => {
  let service: BookingStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

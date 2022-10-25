import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStatisticsCardComponent } from './booking-statistics-card.component';

describe('BookingStatisticsCardComponent', () => {
  let component: BookingStatisticsCardComponent;
  let fixture: ComponentFixture<BookingStatisticsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingStatisticsCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingStatisticsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStatisticsInputComponent } from './booking-statistics-input.component';

describe('BookingStatisticsInputComponent', () => {
  let component: BookingStatisticsInputComponent;
  let fixture: ComponentFixture<BookingStatisticsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingStatisticsInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingStatisticsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

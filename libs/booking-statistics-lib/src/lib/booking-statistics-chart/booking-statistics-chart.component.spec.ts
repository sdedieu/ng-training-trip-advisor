import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStatisticsChartComponent } from './booking-statistics-chart.component';

describe('BookingStatisticsChartComponent', () => {
  let component: BookingStatisticsChartComponent;
  let fixture: ComponentFixture<BookingStatisticsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingStatisticsChartComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingStatisticsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

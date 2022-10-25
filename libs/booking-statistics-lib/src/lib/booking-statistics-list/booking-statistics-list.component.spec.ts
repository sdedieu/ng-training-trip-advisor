import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStatisticsListComponent } from './booking-statistics-list.component';

describe('BookingStatisticsListComponent', () => {
  let component: BookingStatisticsListComponent;
  let fixture: ComponentFixture<BookingStatisticsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingStatisticsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingStatisticsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingStatisticsListsComponent } from './booking-statistics-lists.component';

describe('BookingStatisticsListsComponent', () => {
  let component: BookingStatisticsListsComponent;
  let fixture: ComponentFixture<BookingStatisticsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingStatisticsListsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingStatisticsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

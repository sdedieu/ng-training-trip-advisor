import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantReviewingComponent } from './restaurant-reviewing.component';

describe('RestaurantReviewingComponent', () => {
  let component: RestaurantReviewingComponent;
  let fixture: ComponentFixture<RestaurantReviewingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantReviewingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantReviewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

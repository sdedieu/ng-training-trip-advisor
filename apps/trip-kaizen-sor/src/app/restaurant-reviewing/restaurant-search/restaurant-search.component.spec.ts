import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSearchComponent } from './restaurant-search.component';

describe('RestaurantSearchComponent', () => {
  let component: RestaurantSearchComponent;
  let fixture: ComponentFixture<RestaurantSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantSearchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

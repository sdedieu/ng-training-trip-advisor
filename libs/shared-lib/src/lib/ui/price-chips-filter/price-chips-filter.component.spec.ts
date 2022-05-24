import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceChipsFilterComponent } from './price-chips-filter.component';

describe('PriceChipsFilterComponent', () => {
  let component: PriceChipsFilterComponent;
  let fixture: ComponentFixture<PriceChipsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriceChipsFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceChipsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

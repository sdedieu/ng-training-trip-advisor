import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookableCardComponent } from './bookable-card.component';

describe('BookableCardComponent', () => {
  let component: BookableCardComponent;
  let fixture: ComponentFixture<BookableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookableCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

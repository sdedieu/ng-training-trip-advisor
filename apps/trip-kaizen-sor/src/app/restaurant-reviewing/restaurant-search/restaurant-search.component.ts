import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BehaviorSubject, debounceTime, Observable, of, switchMap, tap } from 'rxjs';
import { Restaurant } from '../models/restaurant';
import { RestaurantCardComponent } from '../restaurant-card/restaurant-card.component';

@Component({
  selector: 'tks-restaurant-search',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    RestaurantCardComponent
  ],
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.css'],
})
export class RestaurantSearchComponent implements OnInit {
  restaurants$: Observable<Restaurant[]> = of([]);
  search = '';
  urgent = false;
  isLoading$ = new BehaviorSubject<boolean>(false);
  search$ = new BehaviorSubject<string>('');

  constructor() {}

  ngOnInit(): void {
    this.restaurants$ = this.search$.pipe(
      tap(() => this.isLoading$.next(true)),
      debounceTime(500),
      switchMap(search => of([])),
      tap(() => this.isLoading$.next(false))
    );
  }

  dispatchSearch()  {
    this.search$.next(this.search);
  }
}

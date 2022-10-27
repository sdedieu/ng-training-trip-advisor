import { Component, OnInit } from '@angular/core';
import { RestaurantSearchComponent } from './restaurant-search/restaurant-search.component'

@Component({
  selector: 'tks-restaurant-reviewing',
  standalone: true,
  imports: [
    RestaurantSearchComponent
  ],
  templateUrl: './restaurant-reviewing.component.html',
  styleUrls: ['./restaurant-reviewing.component.css'],
})
export class RestaurantReviewingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

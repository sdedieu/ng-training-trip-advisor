import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Restaurant } from '../models/restaurant';

type RestaurantDisplay = Restaurant & { euros: number[], stars: number[] };

@Component({
  selector: 'tks-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.css'],
})
export class RestaurantCardComponent implements OnInit {
  @Input() set restaurant(_restaurant: Restaurant) {
   this.$restaurant = {
     ..._restaurant,
      euros: Array(_restaurant.price),
      stars: [...Array(5).keys()].map((v,i, array) => v+1 <= _restaurant.rating ? 2 : array[i] < _restaurant.rating ? 1 : 0),
   };
 }

 $restaurant!: RestaurantDisplay;

  constructor() {
  }

  ngOnInit(): void {}
}

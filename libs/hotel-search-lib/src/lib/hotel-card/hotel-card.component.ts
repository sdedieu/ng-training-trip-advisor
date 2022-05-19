import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel';

type HotelDisplay = Hotel & { euros: number[], stars: number[] };

@Component({
  selector: 'tks-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css'],
})
export class HotelCardComponent implements OnInit {
  @Input() set hotel(_hotel: Hotel) {
    this.$hotel = {
      ..._hotel,
       euros: Array(_hotel.price),
       stars: [...Array(5).keys()].map((v,i, array) => v+1 <= _hotel.rating ? 2 : array[i] < _hotel.rating ? 1 : 0),
    };
  }
 
  $hotel!: HotelDisplay;
  
  constructor() {}

  ngOnInit(): void {}
}

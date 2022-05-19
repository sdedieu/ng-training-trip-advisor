import { Component, Input, OnInit } from '@angular/core';
import { Bookable } from '../../models/bookable';

@Component({
  selector: 'tks-bookable-card',
  templateUrl: './bookable-card.component.html',
  styleUrls: ['./bookable-card.component.css'],
})
export class BookableCardComponent implements OnInit {
  @Input() bookable!: Bookable

  constructor() {}

  ngOnInit(): void {}
}

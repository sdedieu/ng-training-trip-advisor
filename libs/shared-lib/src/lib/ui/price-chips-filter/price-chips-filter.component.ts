import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tks-price-chips-filter',
  templateUrl: './price-chips-filter.component.html',
  styleUrls: ['./price-chips-filter.component.css'],
})
export class PriceChipsFilterComponent implements OnInit {
  @Output() selectionChange = new EventEmitter<number[]>();

  prices: number[] = [];

  elements: number[][] = Array.from(Array(5).keys()).map(k => Array(k + 1));

  constructor() { }

  ngOnInit(): void { }

  updatePrices(index: number): void {
    if (this.prices.includes(index)) {
      this.prices = this.prices.filter(price => price !== index);
    } else {
      this.prices = this.prices.concat(index);
    }

    this.selectionChange.emit(this.prices);
  }
}

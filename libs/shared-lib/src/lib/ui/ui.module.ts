import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookableCardComponent } from './bookable-card/bookable-card.component';
import { PriceChipsFilterComponent } from './price-chips-filter/price-chips-filter.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [BookableCardComponent, PriceChipsFilterComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule
  ],
  exports: [BookableCardComponent, PriceChipsFilterComponent],
})
export class UiModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookableCardComponent } from './bookable-card/bookable-card.component';

@NgModule({
  declarations: [BookableCardComponent],
  imports: [CommonModule],
  exports: [BookableCardComponent],
})
export class UiModule {}

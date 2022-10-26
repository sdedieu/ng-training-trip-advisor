import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedLibModule } from '@trip-kaizen-sor-workspace/shared-lib';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule, SharedLibModule],
  declarations: [RestaurantCardComponent],
  exports: [RestaurantCardComponent]
})
export class RestaurantSearchLibModule {}

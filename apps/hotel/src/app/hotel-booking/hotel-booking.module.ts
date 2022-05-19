import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HotelBookingRoutingModule } from './hotel-booking-routing.module';
import { HotelBookingComponent } from './hotel-booking.component';
import { HotelSearchLibModule } from '@trip-kaizen-sor-workspace/hotel-search-lib';

@NgModule({
  declarations: [HotelBookingComponent],
  imports: [CommonModule, HttpClientModule, HotelBookingRoutingModule, HotelSearchLibModule.forRoot()],
})
export class HotelBookingModule {}

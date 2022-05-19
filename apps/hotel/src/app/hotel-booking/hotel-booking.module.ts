import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HotelBookingRoutingModule } from './hotel-booking-routing.module';
import { HotelBookingComponent } from './hotel-booking.component';
import { HotelLibModule } from '@trip-kaizen-sor-workspace/hotel-lib';

@NgModule({
  declarations: [HotelBookingComponent],
  imports: [CommonModule, HttpClientModule, HotelBookingRoutingModule, HotelLibModule.forRoot()],
})
export class HotelBookingModule {}

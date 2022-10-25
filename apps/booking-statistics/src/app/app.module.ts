import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BookingStatisticsLibModule } from '@trip-kaizen-sor-workspace/booking-statistics-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BookingStatisticsLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

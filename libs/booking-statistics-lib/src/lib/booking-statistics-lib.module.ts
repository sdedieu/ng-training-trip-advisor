import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingStatisticsChartComponent } from './booking-statistics-chart/booking-statistics-chart.component';
import { BookingStatisticsListComponent } from './booking-statistics-list/booking-statistics-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedLibModule } from '@trip-kaizen-sor-workspace/shared-lib';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BookingStatisticsCardComponent } from './ui/booking-statistics-card/booking-statistics-card.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedLibModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    BookingStatisticsChartComponent,
    BookingStatisticsListComponent,
    BookingStatisticsCardComponent,
  ],
  exports: [BookingStatisticsChartComponent, BookingStatisticsListComponent],
})
export class BookingStatisticsLibModule {}

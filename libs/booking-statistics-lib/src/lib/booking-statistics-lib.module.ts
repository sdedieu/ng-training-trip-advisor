import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingStatisticsChartComponent } from './booking-statistics-chart/booking-statistics-chart.component';
import { BookingStatisticsListComponent } from './booking-statistics-list/booking-statistics-list.component';
import { BookingStatisticsListsComponent } from './booking-statistics-lists/booking-statistics-lists.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedLibModule } from '@trip-kaizen-sor-workspace/shared-lib';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BookingStatisticsCardComponent } from './ui/booking-statistics-card/booking-statistics-card.component';
import { MatChipsModule } from '@angular/material/chips';
import { BookingStatisticsInputComponent } from './booking-statistics-input/booking-statistics-input.component';
import { CustomerFullnamePipe } from './pipes/customer-fullname.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';

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
    ScrollingModule
  ],
  declarations: [
    BookingStatisticsChartComponent,
    BookingStatisticsListsComponent,
    BookingStatisticsListComponent,
    BookingStatisticsCardComponent,
    BookingStatisticsInputComponent,
    CustomerFullnamePipe,
  ],
  exports: [BookingStatisticsChartComponent, BookingStatisticsListComponent],
})
export class BookingStatisticsLibModule {}

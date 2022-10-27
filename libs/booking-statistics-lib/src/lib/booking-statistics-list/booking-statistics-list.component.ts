import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Booking } from '@trip-kaizen-sor-workspace/shared-lib';
import { List } from 'immutable';

@Component({
  selector: 'trip-kaizen-sor-workspace-booking-statistics-list',
  templateUrl: './booking-statistics-list.component.html',
  styleUrls: ['./booking-statistics-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingStatisticsListComponent {
  @Input() bookings: List<Booking> | null = null;
}

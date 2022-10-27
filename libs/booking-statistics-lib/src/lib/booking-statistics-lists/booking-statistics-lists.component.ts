import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Booking } from '@trip-kaizen-sor-workspace/shared-lib';
import { List } from 'immutable';

@Component({
  selector: 'trip-kaizen-sor-workspace-booking-statistics-lists',
  templateUrl: './booking-statistics-lists.component.html',
  styleUrls: ['./booking-statistics-lists.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingStatisticsListsComponent {

  @Input() type!: 'restaurant' | 'hotel';
  @Input() bookings: List<Booking> | null = null;
  
  @Output() add = new EventEmitter<Booking>();
}

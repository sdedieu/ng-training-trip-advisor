import { Component, Input } from '@angular/core';
import { Booking } from '@trip-kaizen-sor-workspace/shared-lib';

@Component({
  selector: 'trip-kaizen-sor-workspace-booking-statistics-card',
  template: `<div class="card">
      <div class="left">{{ booking.customer | customerFullname}}</div>
      <div>{{ booking.date | date : 'dd/MM/yyyy'}}</div>
      <div class="right">
        <mat-chip-list>
          <mat-chip [color]="booking.type === 'restaurant' ? 'primary' : 'accent'" selected>{{booking.type}}</mat-chip>
        </mat-chip-list>
      </div>
    </div>`,
  styleUrls: ['./booking-statistics-card.component.css'],
})
export class BookingStatisticsCardComponent {
  @Input() booking!: Booking;
}

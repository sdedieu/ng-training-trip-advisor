import { Component, Input } from '@angular/core';
import { Booking } from '@trip-kaizen-sor-workspace/shared-lib';

@Component({
  selector: 'trip-kaizen-sor-workspace-booking-statistics-card',
  template: `<div class="card">
      <div class="left">{{getCustomerFullName()}}</div>
      <div>{{getFormattedDate(booking.date)}}</div>
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

  /** This is bad for performances, uncomment and look at the console.log in the web console */
  getCustomerFullName(): string {
   // console.log('getCustomerFullName called')
    return `${this.booking.customer.firstname} ${this.booking.customer.lastname}`
  }

    /** This is bad for performances, uncomment and look at the console.log in the web console */
  getFormattedDate(date: Date): string {
   // console.log('getFormattedDate called')
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day.toString() : day}/${month < 10 ? '0' + month.toString() : month}/${year}`
  }
}

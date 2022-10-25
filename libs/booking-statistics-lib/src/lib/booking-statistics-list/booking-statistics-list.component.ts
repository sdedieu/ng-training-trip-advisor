import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Booking } from '@trip-kaizen-sor-workspace/shared-lib';

@Component({
  selector: 'trip-kaizen-sor-workspace-booking-statistics-list',
  templateUrl: './booking-statistics-list.component.html',
  styleUrls: ['./booking-statistics-list.component.css']
})
export class BookingStatisticsListComponent {

  @Input() type!: 'restaurant' | 'hotel';
  @Input() bookings: Booking[] | null = null;
  

  @Output() add = new EventEmitter<Booking>();

  customerName = '';

  addToList() {
    const names = this.customerName.split(' ');
    this.add.emit({id: 0, customer: {firstname: names[0], lastname: names.length > 1 ? names[1] : ''}, type: this.type, date: new Date()})
  }
}

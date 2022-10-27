import { Component, EventEmitter, Input, ChangeDetectionStrategy, Output } from '@angular/core';
import { Booking } from '@trip-kaizen-sor-workspace/shared-lib';

@Component({
  selector: 'trip-kaizen-sor-workspace-booking-statistics-input',
  templateUrl: './booking-statistics-input.component.html',
  styleUrls: ['./booking-statistics-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingStatisticsInputComponent {

  @Input() type!: 'restaurant' | 'hotel';
  
  @Output() add = new EventEmitter<Booking>();

  customerName = '';

  addToList() {
    const names = this.customerName.split(' ');
    this.add.emit({id: 0, customer: {firstname: names[0], lastname: names.length > 1 ? names[1] : ''}, type: this.type, date: new Date()})
  }
}

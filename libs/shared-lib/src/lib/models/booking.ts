import { Customer } from "./customer";

export interface Booking {
    id: number,
    customer: Customer,
    type: 'hotel' | 'restaurant',
    date: Date
}

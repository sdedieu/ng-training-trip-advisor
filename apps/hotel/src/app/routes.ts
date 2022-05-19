import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
    {
        path: 'hotels',
        loadChildren: () => import('./hotel-booking/hotel-booking.module').then(m => m.HotelBookingModule)
    },
    {
        path: '',
        redirectTo: 'hotels',
        pathMatch: 'full'
    }
];
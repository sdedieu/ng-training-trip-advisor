import { Route } from "@angular/router";
import { loadRemoteModule } from "@angular-architects/module-federation"

export const APP_ROUTES: Route[] = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'restaurants',
        loadChildren: () => import('./restaurant-reviewing/restaurant-reviewing.module').then(m => m.RestaurantReviewingModule)
    },
    {
        path: 'hotels',
        loadChildren: () => loadRemoteModule({
            type:'module',
            remoteEntry:'http://localhost:4201/remoteEntry.js',
            exposedModule:'./module'
        }).then(m => m.HotelBookingModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];


import { Route, RouterModule } from "@angular/router";
import { importProvidersFrom } from '@angular/core'

export const APP_ROUTES: Route[] = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'restaurants',
        loadComponent: () => import('./restaurant-reviewing/restaurant-reviewing.component').then(m => m.RestaurantReviewingComponent)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];


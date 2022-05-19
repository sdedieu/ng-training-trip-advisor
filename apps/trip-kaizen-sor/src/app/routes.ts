import { Route } from "@angular/router";

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
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];


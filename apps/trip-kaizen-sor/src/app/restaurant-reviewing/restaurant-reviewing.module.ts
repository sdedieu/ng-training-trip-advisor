import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantReviewingComponent } from './restaurant-reviewing.component';
import { RestaurantSearchComponent } from './restaurant-search/restaurant-search.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { RESTAURANT_REVIEWING_ROUTES } from './restaurant-reviewing.routes';
import { RestaurantSearchLibModule } from '@trip-kaizen-sor-workspace/restaurant-search-lib';

@NgModule({
  declarations: [
    RestaurantReviewingComponent,
    RestaurantSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(RESTAURANT_REVIEWING_ROUTES),
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    RestaurantSearchLibModule
  ],
})
export class RestaurantReviewingModule {}

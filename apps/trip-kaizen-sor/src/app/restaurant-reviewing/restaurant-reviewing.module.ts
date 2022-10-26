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
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { UiModule } from '@trip-kaizen-sor-workspace/shared-lib';
import { RouterModule } from '@angular/router';
import { RESTAURANT_REVIEWING_ROUTES } from './restaurant-reviewing.routes';
import { StoreModule } from '@ngrx/store';
import * as fromRestaurantReviewing from './+state/restaurant-reviewing.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RestaurantReviewingEffects } from './+state/restaurant-reviewing.effects';

@NgModule({
  declarations: [
    RestaurantReviewingComponent,
    RestaurantSearchComponent,
    RestaurantCardComponent,
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
    UiModule,
    StoreModule.forFeature(fromRestaurantReviewing.restaurantReviewingFeatureKey, fromRestaurantReviewing.reducer),
    EffectsModule.forFeature([RestaurantReviewingEffects])
  ],
})
export class RestaurantReviewingModule {}

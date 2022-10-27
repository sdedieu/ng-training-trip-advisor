import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { HotelSearchComponent } from './hotel-search/hotel-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedLibModule, UiModule } from '@trip-kaizen-sor-workspace/shared-lib';
import { HotelSearchService } from './services/hotel-search.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromHotel from './hotel';

@NgModule({
  providers: [
    HotelSearchService
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    UiModule,
    SharedLibModule,
    EffectsModule.forFeature([fromHotel.HotelEffects]),
    StoreModule.forFeature(fromHotel.hotelsFeatureKey, fromHotel.reducer)
  ],
  declarations: [HotelCardComponent, HotelSearchComponent],
  exports: [HotelCardComponent, HotelSearchComponent],
})
export class HotelSearchLibModule {
    static forRoot(): ModuleWithProviders<HotelSearchLibModule> {
      return {
        ngModule: HotelSearchLibModule,
        providers: []
      }
    }
  }

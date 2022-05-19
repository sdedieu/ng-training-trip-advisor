import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    UiModule,
    SharedLibModule
  ],
  declarations: [HotelCardComponent, HotelSearchComponent],
  exports: [HotelCardComponent, HotelSearchComponent],
})
export class HotelLibModule {
    static forRoot(): ModuleWithProviders<HotelLibModule> {
      return {
        ngModule: HotelLibModule,
        providers: []
      }
    }
  }

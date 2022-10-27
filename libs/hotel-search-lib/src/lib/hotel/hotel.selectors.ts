import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromHotel from './hotel.reducer';

  export const selectHotelState = createFeatureSelector<fromHotel.State>(fromHotel.hotelsFeatureKey);

export const selectHotels = createSelector(
    selectHotelState,
    fromHotel.selectAll
);

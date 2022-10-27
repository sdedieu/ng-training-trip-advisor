import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Hotel } from '../models/hotel';

export const loadHotels = createAction(
  '[Hotel/API] Load Hotels', 
  props<{
    page: number,
    limit: number
   }>()
);

export const addHotel = createAction(
  '[Hotel/API] Add Hotel',
  props<{ hotel: Hotel }>()
);

export const upsertHotel = createAction(
  '[Hotel/API] Upsert Hotel',
  props<{ hotel: Hotel }>()
);

export const addHotels = createAction(
  '[Hotel/API] Add Hotels',
  props<{ hotels: Hotel[] }>()
);

export const upsertHotels = createAction(
  '[Hotel/API] Upsert Hotels',
  props<{ hotels: Hotel[] }>()
);

export const updateHotel = createAction(
  '[Hotel/API] Update Hotel',
  props<{ hotel: Update<Hotel> }>()
);

export const updateHotels = createAction(
  '[Hotel/API] Update Hotels',
  props<{ hotels: Update<Hotel>[] }>()
);

export const deleteHotel = createAction(
  '[Hotel/API] Delete Hotel',
  props<{ id: string }>()
);

export const deleteHotels = createAction(
  '[Hotel/API] Delete Hotels',
  props<{ ids: string[] }>()
);

export const clearHotels = createAction(
  '[Hotel/API] Clear Hotels'
);

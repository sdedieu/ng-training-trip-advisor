import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Hotel } from '../models/hotel';
import * as HotelActions from './hotel.actions';

export const hotelsFeatureKey = 'hotels';

export interface State extends EntityState<Hotel> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Hotel> = createEntityAdapter<Hotel>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(HotelActions.addHotel,
    (state, action) => adapter.addOne(action.hotel, state)
  ),
  on(HotelActions.upsertHotel,
    (state, action) => adapter.upsertOne(action.hotel, state)
  ),
  on(HotelActions.addHotels,
    (state, action) => adapter.addMany(action.hotels, state)
  ),
  on(HotelActions.upsertHotels,
    (state, action) => adapter.upsertMany(action.hotels, state)
  ),
  on(HotelActions.updateHotel,
    (state, action) => adapter.updateOne(action.hotel, state)
  ),
  on(HotelActions.updateHotels,
    (state, action) => adapter.updateMany(action.hotels, state)
  ),
  on(HotelActions.deleteHotel,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(HotelActions.deleteHotels,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(HotelActions.clearHotels,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

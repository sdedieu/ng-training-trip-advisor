import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, debounceTime, tap } from 'rxjs/operators';
import { HotelSearchService } from '../services/hotel-search.service';
import * as HotelActions from './hotel.actions';

@Injectable()
export class HotelEffects {
    constructor(private actions$: Actions, private hotelSearchService: HotelSearchService) {}

  loadHotels$ = createEffect(() => this.actions$.pipe(
    ofType(HotelActions.loadHotels),
    debounceTime(500),
    switchMap(action => this.hotelSearchService.findAll(action.page, action.limit).pipe(
      map(page => HotelActions.addHotels({ hotels: page.items }))
    ))
  ));
}
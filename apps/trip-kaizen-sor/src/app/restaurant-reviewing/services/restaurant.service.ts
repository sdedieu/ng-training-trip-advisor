import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  find(search: string, urgent: boolean): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`/restaurants?search=${search}&urgent=${urgent}`);
  }
}

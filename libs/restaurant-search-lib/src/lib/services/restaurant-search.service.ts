import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantSearchService {


  constructor(private http: HttpClient) { 
  }

  find(search: string, urgent: boolean): Observable<Restaurant[]> {
      const url = `/restaurants?search=${search}&urgent=${urgent}`;
      return this.http.get<Restaurant[]>(url);
  }
}
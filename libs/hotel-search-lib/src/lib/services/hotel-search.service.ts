import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel';

@Injectable()
export class HotelSearchService {

  constructor(private http: HttpClient) { }

  find(search: string, page: number, limit: number, urgent: boolean): Observable<Hotel[]> {
    const from = (page - 1) * limit;
    const to = (page * limit) - 1;
    return this.http.get<Hotel[]>(`/hotels?search=${search}&from=${from}&to=${to}&urgent=${urgent}`);
  }
}

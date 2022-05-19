import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel';

@Injectable()
export class HotelSearchService {

  constructor(private http: HttpClient) { }

  find(from: string, to: string, urgent: boolean): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`/hotels?from=${from}@to=${to}&urgent=${urgent}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '@trip-kaizen-sor-workspace/shared-lib';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel';

@Injectable()
export class HotelSearchService {

  constructor(private http: HttpClient) { }

  findAll(page: number, limit: number): Observable<Page<Hotel>> {
    const from = (page - 1) * limit;
    const to = (page * limit) - 1;
    return this.http.get<Page<Hotel>>(`/hotels?from=${from}&to=${to}`);
  }
}

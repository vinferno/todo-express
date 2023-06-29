import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  shareReplay,  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3001/'
  constructor(private http: HttpClient) { }


  get<T>(resource: string) {
    return this.http.get<T>(this.baseUrl + resource).pipe(shareReplay())
  }
  post<T, D>(resource: string, data: D ) {
    return this.http.post<T>(this.baseUrl + resource, data).pipe(shareReplay())
  }
}

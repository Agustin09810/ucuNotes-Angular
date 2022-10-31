import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable} from 'rxjs';
import { City } from './City';

@Injectable({
  providedIn: 'root'
})

export class CitiesService {

  private httpOptions  = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  private cardsUrl = 'http://localhost:3000/api/v1/cities';  // URL to web api

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.cardsUrl, this.httpOptions);
  }

  getCityById(id: string): Observable<City> {
    const url = `${this.cardsUrl}/${id}`;
    return this.http.get<City>(url, this.httpOptions);
  }
}

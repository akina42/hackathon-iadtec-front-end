import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../../models/country';
import { Observable } from 'rxjs';

@Injectable()
export class CountryService {

  constructor(
    private http: HttpClient
  ) { }

  postNewCountry(newCountry: Country): Observable<any>{
    console.log(newCountry);
    return this.http.post<any>(`pais/`, newCountry);
  }

  getCountry(idCountry: number): Observable<any>{
    return this.http.get<any>(`pais/${idCountry}`);
  }

  getAllCountries(): Observable<any> {
    return this.http.get<any>('pais');
  }

  deleteCountry(idCountry: number) {
    return this.http.delete<any>(`pais/${idCountry}`);
  }
}

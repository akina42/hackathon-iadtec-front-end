import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../../models/country';
import { Observable } from 'rxjs';

@Injectable()
export class CountryService {

  constructor(
    private http: HttpClient
  ) { }

  postNewCountry(newCountry: Country): Observable<Country>{
    console.log(newCountry);
    return this.http.post<Country>(`pais/`, newCountry);
  }

  getCountry(idCountry: number): Observable<Country>{
    return this.http.get<Country>(`pais/${idCountry}`);
  }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('pais');
  }

}

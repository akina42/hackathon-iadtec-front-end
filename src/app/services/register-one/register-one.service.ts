import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RegisterOne } from '../../models/register-one';

@Injectable()

export class RegisterOneService {

  constructor(private http: HttpClient) { }

  getRegisterOne(idRegisterOne: number): Observable<RegisterOne>{
    return this.http.get<RegisterOne>(`registerOne/${idRegisterOne}`);
  }

  getAllRegisterOne(): Observable<RegisterOne[]>{
    return this.http.get<RegisterOne[]>('registerOne');
  }

}

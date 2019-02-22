import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from '../../models/state';
import { Observable } from 'rxjs';

@Injectable()
export class StateService {

  constructor(private http: HttpClient) { }

  postNewState(newState: State): Observable<State>{
    console.log(newState);
    return this.http.post<State>(`estado/`, newState);
  }

  getState(idState: number): Observable<any>{
    return this.http.get<any>(`estado/${idState}`);
  }

  getAllStates(): Observable<any> {
    return this.http.get<any>('estado');
  }

  deleteState(idCountry: number) {
    return this.http.delete<any>(`estado/${idCountry}`);
  }

}

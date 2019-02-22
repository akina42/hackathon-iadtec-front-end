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

  getState(idState: number): Observable<State>{
    return this.http.get<State>(`estado/${idState}`);
  }

  getAllStates(): Observable<State[]> {
    return this.http.get<State[]>('estado');
  }

}

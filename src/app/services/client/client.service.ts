import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../../models/client';
import { Observable } from 'rxjs';

@Injectable()
export class ClientService {

  constructor(private http: HttpClient) { }

  postNewClient(newClient: Client): Observable<Client>{
    console.log(newClient);
    return this.http.post<Client>(`cliente/`, newClient);
  }

  getClient(idClient: number): Observable<Client>{
    return this.http.get<Client>(`cliente/${idClient}`);
  }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>('cliente');
  }


}

import { Component, OnInit } from '@angular/core';
import { RegisterOneService } from '../../services/register-one/register-one.service';
import { RegisterOne } from '../../models/register-one';
import { ClientService } from '../../services/client/client.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.scss']
})
export class ClientRegisterComponent implements OnInit {

  listClients: Client[];
  hasCountries: true;
  closeResult: string;
  modalReference: any;

  constructor(
    private clientService: ClientService
  ) { }

  ngOnInit() {
    this.getAllClients();
  }


  getAllClients() {
    this.clientService.getAllClients().subscribe(listClients => {
      this.listClients = listClients;
    }, error => {
      console.log('teste', error);
    });
  }

  deleteClient(idClient) {
    this.clientService.deleteClient(idClient).subscribe( () => {
      this.getAllClients();
    }, error => {
      console.log('teste', error);
    });
  }

  editCountry() {
    console.log('editar');
  }

}

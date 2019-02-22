import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client/client.service';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
  type: 'success',
  message: 'This is an success alert',
}, {
  type: 'info',
  message: 'This is an info alert',
}, {
  type: 'warning',
  message: 'This is a warning alert',
}, {
  type: 'danger',
  message: 'This is a danger alert',
}
];

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  alerts: Alert[];
  client: Client;
  estado: string;
  idEstado: number;
  active = true;
  showActive = false;

  constructor(
    private clientService: ClientService,
  ) { }

  ngOnInit() {
    this.getNewClient();
  }
  
  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    event.preventDefault();
    this.alerts = Array.from(ALERTS);
  }

  getNewClient(){
    this.client = new Client();
  }

  createClient() {
    this.client.idEstado = this.idEstado;
    this.client.situacao = 'ATIVO';
    this.clientService.postNewClient(this.client).subscribe(client => {
      this.alerts = Array.from(ALERTS);
    }, error => {
      this.alerts = Array.from(ALERTS);
    });
  }

  getSituacaoClient(){
    if (this.active) {
      return 'ATIVO';
    }
    return 'INATIVO';
  }

}

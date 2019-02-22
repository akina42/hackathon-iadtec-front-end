import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client/client.service';
import { State } from '../../models/state';
import { StateService } from '../../services/state/state.service';

interface Alert {
  type: string;
  message: string;
}

const ALERT_ERROR: Alert = {
  type: 'danger',
  message: '',
}

const ALERT_SUCCESS: Alert = {
  type: 'success',
  message: 'Sucesso ao salvar cliente!',
}

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  alert: Alert;
  client: Client;
  estado: string;
  idEstado: number;
  active = true;
  showActive = false;
  hasStates = true;
  listStates: State[];
  closed = false;

  constructor(
    private clientService: ClientService,
    private stateService: StateService
  ) { }

  ngOnInit() {
    this.getNewClient();
    this.getAllStates();
  }

  getNewClient(){
    this.client = new Client();
  }

  getAllStates(){
    this.stateService.getAllStates().subscribe(response => {
      this.listStates = response.data;
      if (this.listStates.length <= 0) {
        this.hasStates = false;
      }
    }, error => {
      this.hasStates = false;
    });
  }

  createClient() {
    this.client.idEstado = this.idEstado;
    this.client.situacao = 'ATIVO';
    this.clientService.postNewClient(this.client).subscribe(client => {
      this.alert = ALERT_SUCCESS;
    }, error => {
      console.log('erro', error.error.errors);
      this.alert = ALERT_ERROR;
      this.alert.message = error.error.errors.toString();
    });
  }

  getSituacaoClient(){
    if (this.active) {
      return 'ATIVO';
    }
    return 'INATIVO';
  }

}

import { Component, OnInit } from '@angular/core';
import { State } from '../../models/state';
import { StateService } from '../../services/state/state.service';
import { CountryService } from '../../services/country/country.service';
import { Country } from '../../models/country';

interface Alert {
  type: string;
  message: string;
}

const ALERT_ERROR: Alert = {
  type: 'danger',
  message: 'Ocorreu um erro ao tentar salvar o estado, por favor tente novamente.',
}

const ALERT_SUCCESS: Alert = {
  type: 'success',
  message: 'Sucesso ao salvar estado!',
}

@Component({
  selector: 'app-form-state',
  templateUrl: './form-state.component.html',
  styleUrls: ['./form-state.component.scss']
})
export class FormStateComponent implements OnInit {

  alert: Alert;
  alerts: Alert[];
  state: State;
  listCountries: Country[];
  pais: number;

  constructor(
    private stateService: StateService,
    private countryService: CountryService,
  ) { }

  ngOnInit() {
    this.getNewState();
    this.getAllCountries();
  }

  getNewState(){
    this.state = new State();
  }

  createState() {
    this.state.pais = this.pais;
    this.stateService.postNewState(this.state).subscribe(state => {
      this.alert = ALERT_SUCCESS;
    }, error => {
      this.alert = ALERT_ERROR;
    });
  }

  getAllCountries(){
    this.countryService.getAllCountries().subscribe(response => {
      this.listCountries = response.data;
    }, error => {
    });
  }

}

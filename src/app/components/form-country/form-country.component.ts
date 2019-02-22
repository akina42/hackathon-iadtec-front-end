import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { CountryService } from '../../services/country/country.service';

interface Alert {
  type: string;
  message: string;
}

const ALERT_ERROR: Alert = {
  type: 'danger',
  message: 'Ocorreu um erro ao tentar salvar o país, por favor tente novamente.',
}

const ALERT_SUCCESS: Alert = {
  type: 'success',
  message: 'Sucesso ao salvar país!',
}
@Component({
  selector: 'app-form-country',
  templateUrl: './form-country.component.html',
  styleUrls: ['./form-country.component.scss']
})

export class FormCountryComponent implements OnInit {

  alert: Alert;
  alerts: Alert[];
  country: Country;

  constructor(
    private countryService: CountryService,
  ) { }

  ngOnInit() {
    this.getNewCountry();
  }

  getNewCountry(){
    this.country = new Country();
  }

  // close(alert: Alert) {
  //   this.alerts.splice(this.alerts.indexOf(alert), 1);
  // }

  // reset() {
  //   event.preventDefault();
  //   this.alerts = Array.from(ALERTS);
  // }

  createCountry() {
    this.countryService.postNewCountry(this.country).subscribe(country => {
      this.alert = ALERT_SUCCESS;
    }, error => {
      this.alert = ALERT_ERROR;
    });
  }
}

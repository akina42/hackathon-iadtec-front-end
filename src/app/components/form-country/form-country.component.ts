import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country';
import { CountryService } from '../../services/country/country.service';

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
  selector: 'app-form-country',
  templateUrl: './form-country.component.html',
  styleUrls: ['./form-country.component.scss']
})

export class FormCountryComponent implements OnInit {

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

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    event.preventDefault();
    this.alerts = Array.from(ALERTS);
  }

  createCountry() {
    this.countryService.postNewCountry(this.country).subscribe(country => {
      this.alerts = Array.from(ALERTS);
    }, error => {
      this.alerts = Array.from(ALERTS);
    });
  }
}

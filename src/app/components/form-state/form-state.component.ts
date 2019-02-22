import { Component, OnInit } from '@angular/core';
import { State } from '../../models/state';
import { StateService } from '../../services/state/state.service';

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
  selector: 'app-form-state',
  templateUrl: './form-state.component.html',
  styleUrls: ['./form-state.component.scss']
})
export class FormStateComponent implements OnInit {

  alerts: Alert[];
  state: State;

  constructor(
    private stateService: StateService,
  ) { }

  ngOnInit() {
    this.getNewState();
  }

  getNewState(){
    this.state = new State();
  }


  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    event.preventDefault();
    this.alerts = Array.from(ALERTS);
  }

  createState() {
    this.stateService.postNewState(this.state).subscribe(state => {
      this.alerts = Array.from(ALERTS);
    }, error => {
      this.alerts = Array.from(ALERTS);
    });
  }

}

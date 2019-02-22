import { Component, OnInit, Input } from '@angular/core';
import { RegisterOneService } from '../../services/register-one/register-one.service';
import { RegisterOne } from '../../models/register-one';
import { StateService } from '../../services/state/state.service';
import { State } from '../../models/state';

@Component({
  selector: 'app-state-register',
  templateUrl: './state-register.component.html',
  styleUrls: ['./state-register.component.scss']
})
export class StateRegisterComponent implements OnInit {

  @Input() registerOne: RegisterOne;
  hasCountries: true;
  closeResult: string;
  modalReference: any;
  listStates: State[];

  constructor(
    private stateService: StateService,
  ) { }

  ngOnInit() {
  }

  getAllStates() {
    this.stateService.getAllStates().subscribe(listStates => {
      this.listStates = listStates;
    }, error => {
      console.log('teste', error);
    });
  }

  deleteCountry() {
    console.log('deletar');
  }

  editCountry() {
    console.log('editar');
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { RegisterOneService } from '../../services/register-one/register-one.service';
import { RegisterOne } from '../../models/register-one';

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

  constructor(
    private registerOneService: RegisterOneService,
  ) { }

  ngOnInit() {
  }

  deleteCountry() {
    console.log('deletar');
  }

  editCountry() {
    console.log('editar');
  }
}

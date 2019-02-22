import { Component, OnInit } from '@angular/core';
import { RegisterOneService } from '../../services/register-one/register-one.service';
import { RegisterOne } from '../../models/register-one';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.scss']
})
export class ClientRegisterComponent implements OnInit {

  registerOne: RegisterOne;
  listRegisterOne: RegisterOne[];
  hasCountries: true;
  closeResult: string;
  modalReference: any;

  constructor(
    private registerOneService: RegisterOneService
  ) { }

  ngOnInit() {
    this.getRegisterOne();
    this.getAllRegisterOne();
  }
  getRegisterOne(){
    const idRegisterOne = 1;
    this.registerOneService.getRegisterOne(idRegisterOne).subscribe(registerOne => {
      this.registerOne = registerOne;
    }, error => {
      console.log('teste', error);
    });
  }

  getAllRegisterOne(){
    this.registerOneService.getAllRegisterOne().subscribe(listRegisterOne => {
      this.listRegisterOne = listRegisterOne;
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

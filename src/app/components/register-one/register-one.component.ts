import { Component, OnInit } from '@angular/core';
import { RegisterOne } from '../../models/register-one';
import { RegisterOneService } from '../../services/register-one/register-one.service';


@Component({
  selector: 'app-register-one',
  templateUrl: './register-one.component.html',
  styleUrls: ['./register-one.component.scss']
})
export class RegisterOneComponent implements OnInit {

  registerOne: RegisterOne;
  listRegisterOne: RegisterOne[];

  constructor(
    private registerOneService: RegisterOneService
  ) { }

  ngOnInit() {
    this.getRegisterOne();
    this.getAllRegisterOne();
  }

  getRegisterOne(){
    let idRegisterOne = 1;
    this.registerOneService.getRegisterOne(idRegisterOne).subscribe(registerOne => {
      this.registerOne = registerOne;
    });
  }

  getAllRegisterOne(){
    this.registerOneService.getAllRegisterOne().subscribe(listRegisterOne => {
      this.listRegisterOne = listRegisterOne;
    });
  }

}

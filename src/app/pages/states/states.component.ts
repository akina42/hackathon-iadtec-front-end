import { Component, OnInit } from '@angular/core';
import { RegisterOneService } from '../../services/register-one/register-one.service';
import { RegisterOne } from '../../models/register-one';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  listRegisterOne: RegisterOne[];

  constructor(
    private registerOneService: RegisterOneService
  ) { }

  ngOnInit() {
    this.getAllRegisterOne();
  }

  
  getAllRegisterOne(){
    this.registerOneService.getAllRegisterOne().subscribe(listRegisterOne => {
      this.listRegisterOne = listRegisterOne;
    }, error => {
      console.log('teste', error);
    });
  }
}

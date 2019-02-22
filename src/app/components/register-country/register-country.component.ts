import { Component, OnInit } from '@angular/core';
import { RegisterOneService } from '../../services/register-one/register-one.service';
import { RegisterOne } from '../../models/register-one';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-register-country',
  templateUrl: './register-country.component.html',
  styleUrls: ['./register-country.component.scss']
})
export class RegisterCountryComponent implements OnInit {

  registerOne: RegisterOne;
  listRegisterOne: RegisterOne[];
  hasCountries: true;
  closeResult: string;
  modalReference: any;

  constructor(
    private registerOneService: RegisterOneService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getRegisterOne();
    this.getAllRegisterOne();
  }

  // openModalConfirm() {
  //   const modalRef = this.modalService.open(ModalConfirmComponent);
  //   modalRef.componentInstance.name = 'World';
  //   this.modalReference = this.modalService.open(ModalConfirmComponent);
  //     this.modalReference.result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //     }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //     });
  // }

  // getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }


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

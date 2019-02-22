import { Component, OnInit } from '@angular/core';
import { RegisterOneService } from '../../services/register-one/register-one.service';
import { RegisterOne } from '../../models/register-one';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmComponent } from '../modal-confirm/modal-confirm.component';
import { CountryService } from '../../services/country/country.service';
import { Country } from '../../models/country';

@Component({
  selector: 'app-register-country',
  templateUrl: './register-country.component.html',
  styleUrls: ['./register-country.component.scss']
})
export class RegisterCountryComponent implements OnInit {

  listCountries: Country[];
  hasCountries: true;
  closeResult: string;
  modalReference: any;

  constructor(
    private countryService: CountryService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getAllCountries();
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


  getAllCountries() {
    this.countryService.getAllCountries().subscribe(response => {
      this.listCountries = response.data;
    }, error => {
      console.log('teste', error);
    });
  }

  deleteCountry(idCountry) {
    this.countryService.deleteCountry(idCountry).subscribe( () => {
      this.getAllCountries();
    }, error => {
      console.log('teste', error);
    });
  }

  editCountry() {
    console.log('editar');
  }
}

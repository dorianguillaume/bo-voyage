import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservationForm: FormGroup

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.reservationForm = new FormGroup({
      carteNum: new FormControl('', [Validators.required, CustomValidators.rangeLength([16,16]), CustomValidators.number]),
      moisExpiration: new FormControl('', [Validators.required, CustomValidators.rangeLength([2,2]), CustomValidators.number]),
      anneeExpiration: new FormControl('', [Validators.required, CustomValidators.rangeLength([4,4]), CustomValidators.number]),
      ccv: new FormControl('', [Validators.required, CustomValidators.rangeLength([3,3]), CustomValidators.number]),
      assurance: new FormControl()
    })
  }

  get carteNum(){
    return this.reservationForm.controls.carteNum
  }

  get moisExpiration(){
    return this.reservationForm.controls.moisExpiration
  }

  get anneeExpiration(){
    return this.reservationForm.controls.anneeExpiration
  }

  get ccv(){
    return this.reservationForm.controls.ccv
  }

}

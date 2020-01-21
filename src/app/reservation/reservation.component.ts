import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormArray, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CustomValidators} from 'ng2-validation';
import {ActivatedRoute, Router} from '@angular/router';
import {ReservationService} from '../shared/reservation.service';
import {Reservation} from '../model/reservation';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservationForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private reservationService: ReservationService,
              private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.reservationForm = new FormGroup({
      carteNum: new FormControl('', [Validators.required, CustomValidators.rangeLength([16, 16]), CustomValidators.number]),
      moisExpiration: new FormControl('', [Validators.required, CustomValidators.rangeLength([2, 2]), CustomValidators.number]),
      anneeExpiration: new FormControl('', [Validators.required, CustomValidators.rangeLength([4, 4]), CustomValidators.number]),
      ccv: new FormControl('', [Validators.required, CustomValidators.rangeLength([3, 3]), CustomValidators.number]),
      assurance: new FormControl()
    });
  }

  get carteNum() {
    return this.reservationForm.controls.carteNum;
  }

  get moisExpiration() {
    return this.reservationForm.controls.moisExpiration;
  }

  get anneeExpiration() {
    return this.reservationForm.controls.anneeExpiration;
  }

  get ccv() {
    return this.reservationForm.controls.ccv;
  }

  addReservation() {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        //+params.get('id') ==> parseToInt
        const reservation = new Reservation(1, this.authService.user.id, +params.get('id'), new Date());
        console.log(reservation);

        this.reservationService.create(reservation).subscribe();

        this.router.navigate(['success']);
      });
  }

}

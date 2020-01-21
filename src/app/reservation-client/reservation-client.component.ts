import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ReservationService} from '../shared/reservation.service';
import {Reservation} from '../model/reservation';
import {AuthService} from '../shared/auth.service';
import {FormuleService} from '../shared/formule.service';
import {Formule} from '../model/formule';
import {Form} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-client',
  templateUrl: './reservation-client.component.html',
  styleUrls: ['./reservation-client.component.css']
})
export class ReservationClientComponent implements OnInit {

  reservations: Reservation[];
  formules: Formule[];
  reservationsClient = [];
  formulesClient = [];

  constructor(private reservationService: ReservationService, private authService: AuthService, private formuleService: FormuleService, private router: Router) {
  }

  dest = [];

  ngOnInit() {
    this.reservationService.getAll().subscribe(
      (reservations) => {
        this.reservations = reservations;

        //SI la reservation comporte l'id client connecté on l'ajoute à sa liste de réservation
        this.reservations.forEach(reservation => {
          if (+reservation.id_client === +this.authService.user.id) {
            this.reservationsClient.push(reservation);
            this.formuleService.find(reservation.id_formule).subscribe(
              (formule) => {
                this.dest.push(formule.destination.region);
              });
          }
        });
      });
  }

  deleteReservation(id) {
    this.reservationService.delete(id).subscribe((d) => console.log(d), () => console.log('error'));
    this.router.navigate(['/suppression-reservation'])

  }
}

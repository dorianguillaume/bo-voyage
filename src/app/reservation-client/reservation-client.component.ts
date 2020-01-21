import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReservationService} from '../shared/reservation.service';
import {Reservation} from '../model/reservation';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-reservation-client',
  templateUrl: './reservation-client.component.html',
  styleUrls: ['./reservation-client.component.css']
})
export class ReservationClientComponent implements OnInit {

  reservations: Reservation[];
  reservationsClient = [];

  constructor(private reservationService: ReservationService, private authService: AuthService) {
  }

  ngOnInit() {
    this.reservationService.getAll().subscribe(
      (reservations) => {
        this.reservations = reservations;

        //SI la reservation comporte l'id client connecté on l'ajoute à sa liste de réservation
        this.reservations.forEach(reservation => {
          if (+reservation.id_client === this.authService.user.id) {
            this.reservationsClient.push(reservation);
          }});
      });


  }


}

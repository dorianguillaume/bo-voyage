import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Reservation} from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>('api/reservations');
  }

  find(id) {
    return this.httpClient.get<Reservation>('api/reservations/' + id);
  }

  update(reservation) {
    return this.httpClient.put('api/reservations', reservation);
  }

  create(reservation) {
    return this.httpClient.post('api/reservations', reservation);
  }
}

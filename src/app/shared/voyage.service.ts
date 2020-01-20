import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Formule} from '../model/formule';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Formule[]> {
    return this.httpClient.get<Formule[]>('api/formules');
  }

  get(i) {
    return this.httpClient.get<Formule[]>('api/formules')[i];
  }

  update(formule) {
    return this.httpClient.put('api/formules', formule);
  }

  create(formule) {
    return this.httpClient.post('api/formules', formule);
  }

  find(id) {
    return this.httpClient.get<Formule>('api/formules/' + id);
  }
}

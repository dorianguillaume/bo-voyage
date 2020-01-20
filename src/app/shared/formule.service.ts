import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Formule} from '../model/formule';

@Injectable({
  providedIn: 'root'
})
export class FormuleService {

  /* Instanciation du client HTTP */
  constructor(private httpClient: HttpClient) {
  }

  /* Appel GET vers api/formules pour récupérer la liste des formules */
  getAll(): Observable<Formule[]> {
    return this.httpClient.get<Formule[]>('api/formules');
  }

  /* Appel GET vers api/formules/id pour récupérer la formule correspondant à l'ID passé en paramètre */
  find(id) {
    return this.httpClient.get<Formule>('api/formules/' + id);
  }

  /* Appel PUT vers api/formules pour mettre à jour la formule passée en paramètre */
  update(formule) {
    return this.httpClient.put('api/formules', formule);
  }

  /* Appel POST vers api/formules pour créer la formule passée en paramètre */
  create(formule) {
    return this.httpClient.post('api/formules', formule);
  }
}

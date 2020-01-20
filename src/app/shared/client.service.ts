import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Voyageur} from '../model/voyageur';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  /* Instanciation du client HTTP */
  constructor(private httpClient: HttpClient) {
  }

  /* Appel GET vers api/formules pour récupérer la liste des formules */
  getAll(): Observable<Voyageur[]> {
    return this.httpClient.get<Voyageur[]>('api/voyageurs');
  }

  /* Appel GET vers api/formules/id pour récupérer la formule correspondant à l'ID passé en paramètre */
  find(id) {
    return this.httpClient.get<Voyageur>('api/voyageurs/' + id);
  }

  /* Appel PUT vers api/formules pour mettre à jour la formule passée en paramètre */
  update(voyageur) {
    return this.httpClient.put('api/voyageurs', voyageur);
  }

  /* Appel POST vers api/formules pour créer la formule passée en paramètre */
  create(voyageur) {
    return this.httpClient.post('api/voyageurs', voyageur);
  }
}

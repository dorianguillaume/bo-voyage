import {Destination} from './destination';

export class Formule {
  id: number;
  date_depart: Date;
  date_retour: Date;
  prix_ht: number;
  deleted: boolean;
  nb_places: number;
  destination: Destination;
  promotion: number;

  constructor(id: number, date_depart: Date, date_retour: Date, prix_ht: number, deleted: boolean, nb_places: number, destination: Destination, promotion: number) {
    this.id = id;
    this.date_depart = date_depart;
    this.date_retour = date_retour;
    this.prix_ht = prix_ht;
    this.deleted = deleted;
    this.nb_places = nb_places;
    this.destination = destination;
    this.promotion = promotion;
  }
}

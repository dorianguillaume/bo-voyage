export class Reservation {
    id: number
    id_client: number
    id_formule: number
    date: Date
    est_assure: boolean
    prix: number
    nb_accompagnant: number


  constructor(id: number, id_client: number, id_formule: number, date: Date, est_assure: boolean, prix: number, nb_accompagnant: number) {
    this.id = id;
    this.id_client = id_client;
    this.id_formule = id_formule;
    this.date = date;
    this.est_assure = est_assure;
    this.prix = prix;
    this.nb_accompagnant = nb_accompagnant;
  }
}

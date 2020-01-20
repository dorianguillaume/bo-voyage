export class Voyageur {

  constructor(id: number, civilite: string, nom: string, prenom: string, date_naissance: Date) {
    this.id = id;
    this.civilite = civilite;
    this.nom = nom;
    this.prenom = prenom;
    this.date_naissance = date_naissance;
  }

  id: number;
  civilite: string;
  nom: string;
  prenom: string;
  date_naissance: Date;
}

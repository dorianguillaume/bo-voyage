export class Voyageur {


  constructor(id: number, civilite: string, nom: string, prenom: string, date_naissance: Date, telephone: string, adresse: string, email: string, password: string) {
    this.id = id;
    this.civilite = civilite;
    this.nom = nom;
    this.prenom = prenom;
    this.date_naissance = date_naissance;
    this.telephone = telephone;
    this.adresse = adresse;
    this.email = email;
    this.password = password;
  }

  id: number;
  civilite: string;
  nom: string;
  prenom: string;
  date_naissance: Date;
  telephone: string;
  adresse: string;
  email: string;
  password: string;
}

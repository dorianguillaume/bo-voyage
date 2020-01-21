/**
 * Stocke les accompagnant ainsi que l'utilisateur qui s'enregistre (ils sont tous considéré comme client)
 * les accompagnant ne dispose pas de mail et de mot de passe en revanche (null)
 */
export class Voyageur {

  constructor(civilite: string, nom: string, prenom: string, date_naissance: Date, telephone: string, adresse: string, ville: string, code_postale: number, email: string, password: string) {

    this.civilite = civilite;
    this.nom = nom;
    this.prenom = prenom;
    this.date_naissance = date_naissance;
    this.telephone = telephone;
    this.adresse = adresse;
    this.ville = ville;
    this.code_postale = code_postale
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
  ville: string;
  code_postale: number
  email: string;
  password: string;
}

import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {ClientService} from '../shared/client.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  userForm;
  user;

  constructor(private authService: AuthService, private clientService: ClientService) {
  }

  ngOnInit() {
    this.clientService.find(this.authService.user.id).subscribe(
      user => {
        this.user = user;
        this.initFormGroup();
      });
  }

  update() {
    this.user.civilite = this.userForm.controls.civilite.value;
    this.user.nom = this.userForm.controls.nom.value;
    this.user.telephone = this.userForm.controls.telephone.value;
    this.user.prenom = this.userForm.controls.prenom.value;
    this.user.adresse = this.userForm.controls.adresse.value;
    this.user.ville = this.userForm.controls.ville.value;
    this.user.code_postale = this.userForm.controls.codePostal.value;
    this.user.email = this.userForm.controls.email.value;

    this.clientService.update(this.user).subscribe();
  }

  initFormGroup() {
    this.userForm = new FormGroup({
      email: new FormControl(this.user.email),
      civilite: new FormControl(this.user.civilite),
      telephone: new FormControl(this.user.telephone),
      nom: new FormControl(this.user.nom),
      prenom: new FormControl(this.user.prenom),
      adresse: new FormControl(this.user.adresse),
      ville: new FormControl(this.user.ville),
      codePostal: new FormControl(this.user.code_postale)
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {ClientService} from '../shared/client.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  userForm;
  user;

  constructor(private authService: AuthService, private clientService: ClientService, private router: Router) {
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
    this.router.navigate(['/voyages'])

  }

  initFormGroup() {
    this.userForm = new FormGroup({
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      civilite: new FormControl(this.user.civilite, [Validators.required]),
      telephone: new FormControl(this.user.telephone, [Validators.required, Validators.minLength(10), Validators.maxLength(10), CustomValidators.number]),
      nom: new FormControl(this.user.nom, [Validators.required]),
      prenom: new FormControl(this.user.prenom, [Validators.required]),
      adresse: new FormControl(this.user.adresse, [Validators.required]),
      ville: new FormControl(this.user.ville, [Validators.required]),
      codePostal: new FormControl(this.user.code_postale, [Validators.required, Validators.minLength(5), Validators.maxLength(5), CustomValidators.number])
    });
  }

  get email(){
    return this.userForm.controls.email
  }

  get nom(){
    return this.userForm.controls.nom
  }

  get prenom(){
    return this.userForm.controls.prenom
  }

  get civilite(){
    return this.userForm.controls.civilite
  }

  get adresse(){
    return this.userForm.controls.adresse
  }

  get telephone(){
    return this.userForm.controls.telephone
  }

  get ville(){
    return this.userForm.controls.ville
  }

  get codePostal(){
    return this.userForm.controls.codePostal
  }
}

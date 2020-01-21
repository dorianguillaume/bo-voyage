import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../shared/client.service';
import {Voyageur} from '../model/voyageur';
import {Router} from '@angular/router';
import {AuthService} from '../shared/auth.service';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  user;
  userForm;

  constructor(private clientService: ClientService, private route: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.initFormGroup();
    
  }

  initFormGroup() {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      civilite: new FormControl('', [Validators.required]),
      naissance: new FormControl('', [Validators.required]),
      adresse: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), CustomValidators.number]),
      ville: new FormControl('', [Validators.required]),
      codePostal: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5), CustomValidators.number])
    });
  }

  get email(){
    return this.userForm.controls.email
  }

  get password(){
    return this.userForm.controls.password
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

  get naissance(){
    return this.userForm.controls.naissance
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



  create() {
    this.user = new Voyageur(
      this.userForm.controls.civilite.value,
      this.userForm.controls.nom.value,
      this.userForm.controls.prenom.value,
      this.userForm.controls.naissance.value,
      this.userForm.controls.telephone.value,
      this.userForm.controls.adresse.value,
      this.userForm.controls.ville.value,
      this.userForm.controls.codePostal.value,
      this.userForm.controls.email.value,
      this.userForm.controls.password.value);

    this.clientService.create(this.user).subscribe((u) => {
      this.authService.setUser(u);
      this.authService.login();
    });
  }
}

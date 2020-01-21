import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ClientService} from '../shared/client.service';
import {Voyageur} from '../model/voyageur';
import {Router} from '@angular/router';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  user;
  userForm;
  usersLength;

  constructor(private clientService: ClientService, private route: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.initFormGroup();
    this.clientService.getAll().subscribe((c) => this.usersLength = c.length + 1);
  }

  initFormGroup() {
    this.userForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      nom: new FormControl(''),
      prenom: new FormControl(''),
      civilite: new FormControl(''),
      naissance: new FormControl(''),
      adresse: new FormControl(''),
      telephone: new FormControl(''),
      ville: new FormControl(''),
      codePostal: new FormControl('')
    });
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

    console.log(this.user);

    this.clientService.create(this.user).subscribe((u) => {
      console.log(u);
      this.authService.setUser(u);
      this.authService.login();
    });
  }
}

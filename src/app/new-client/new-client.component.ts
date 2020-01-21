import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ClientService} from '../shared/client.service';
import {Voyageur} from '../model/voyageur';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  user;
  userForm;
  usersLength

  constructor(private clientService: ClientService) { }

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
      this.usersLength++,
      this.userForm.civilite,
      this.userForm.nom,
      this.userForm.prenom,
      this.userForm.naissance,
      this.userForm.telephone,
      this.userForm.adresse,
      this.userForm.ville,
      this.userForm.codePostal,
      this.userForm.email,
      this.userForm.password);
    
    this.clientService.create(this.user).subscribe();
  }


}

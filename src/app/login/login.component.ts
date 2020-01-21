import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../shared/client.service';
import {Voyageur} from '../model/voyageur';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  clients: Voyageur[];
  error

  constructor(private clientService: ClientService, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.email]),
      pswd: new FormControl('', [Validators.required])
    });

    //On récupère tout les clients enregistré pour comparer avec la fonction match()
    this.clientService.getAll().subscribe((clients) => {
      this.clients = clients;
    });
  }

  get mail(){
    return this.loginForm.controls.mail
  }

  get pswd(){
    return this.loginForm.controls.pswd
  }

  match() {
    this.clients.forEach((c) => {

      //Si c'est valide on enregistre l'utilisateur et on le log
      if (this.loginForm.controls.mail.value === c.email && this.loginForm.controls.pswd.value === c.password) {
        this.authService.setUser(c)
        this.authService.login();
      } else this.error = true;
    });
  }
}

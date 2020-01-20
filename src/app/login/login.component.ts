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

  constructor(private clientService: ClientService, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.email]),
      pswd: new FormControl('', [Validators.required])
    });

    this.clientService.getAll().subscribe((clients) => {
      this.clients = clients;
    });
  }

  match() {
    this.clients.forEach((c) => {
      if (this.loginForm.controls.mail.value === c.email && this.loginForm.controls.pswd.value === c.password) {
        this.authService.setUser(c)
        this.authService.login();
        this.router.navigate(['**']);
      }
    });
  }
}

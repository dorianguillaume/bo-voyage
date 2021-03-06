import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from './client.service';
import {Voyageur} from '../model/voyageur';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  previousURL = '/**';
  private isAuth = false;
  public user;

  constructor(private router: Router, private clientService: ClientService) { }

  login() {
    this.isAuth = true;
    this.router.navigate([this.previousURL]);
  }

  logout() {
    this.isAuth = false;
    this.previousURL = '/**';
    this.router.navigate(['/voyages']);
    this.user = null;
  }

  setUser(user) {
    this.user = user;
  }

  setURL(p) {
    this.previousURL = p;
  }

  isAuthenticated() {
    return this.isAuth;
  }

}

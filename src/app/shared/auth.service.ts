import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from './client.service';
import {Voyageur} from '../model/voyageur';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private isAuth = false;
  public user
    //new Voyageur(1, 'Mr', 'test', 'test', new Date(), '0123456789', 'Nonya business', 'a', 'a');

  constructor(private router: Router, private clientService: ClientService) { }

  login() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
    this.user = null;
  }

  setUser(user) {
    this.user = user;
  }

  isAuthenticated() {
    return this.isAuth;
  }

}

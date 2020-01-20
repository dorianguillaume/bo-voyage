import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private isAuth = false;
  private user 

  constructor(private router: Router, private clientService: ClientService) { }

  login() {
    this.isAuth = true;
  }

  logout() {
    this.isAuth = false;
  }

   setUser(user){
    this.user = user
  }

  isAuthenticated() {
    return this.isAuth;
  }
}

import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceGuard implements CanActivate {

  previousUrl;

  constructor(private authservice: AuthService, private router: Router) {

  }

  canActivate() {
    const isAuth = this.authservice.isAuthenticated();

    if (!isAuth) {
      /* Récupère l'URL de la page avant redirection */
      this.previousUrl = this.router.getCurrentNavigation().initialUrl.toString();
      this.router.navigate(['/login']);
    }
    return isAuth;
  }
}

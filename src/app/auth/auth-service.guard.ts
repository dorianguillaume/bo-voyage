import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, RoutesRecognized} from '@angular/router';
import {AuthService} from '../shared/auth.service';
import {pairwise} from 'rxjs/internal/operators/pairwise';
import {filter} from 'rxjs/internal/operators/filter';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceGuard implements CanActivate {

  previousUrl;

  constructor(private authservice: AuthService, private router: Router) {

  }

  canActivate() {
    let isAuth = this.authService.isAuthenticated()

    const isAuth = this.authservice.isAuthenticated();

    if (!isAuth) {
      /* Récupère l'URL de la page avant redirection */
      this.previousUrl = this.router.getCurrentNavigation().initialUrl.toString();
      this.router.navigate(['/login']);
    }
    return isAuth
  }
}

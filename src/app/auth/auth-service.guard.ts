import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {AuthService} from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceGuard implements CanActivate {

  constructor(private authservice: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const isAuth = this.authservice.isAuthenticated();

    if (!isAuth) {
      this.router.navigate(['/login']);
    }

    return isAuth;
  }
}

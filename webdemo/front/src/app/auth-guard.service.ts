import {Injectable} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import {UserService} from './user.service';
import {AuthTokenService} from './authtoken.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private tokenServe: AuthTokenService,
    private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.tokenServe.getToken() !== null) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

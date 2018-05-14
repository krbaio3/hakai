import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from '@angular/router';

import { AuthService } from './auth-service.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(`valor next ${next}`);
    if (this.auth.isAuthenticated()) {
      console.log('Pasó del el Guard');
      return true;
    } else {
      console.error('Bloqueado por el Guard');
      return false;
    }
  }
}

import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpService } from '../services/http/http.service';

@Injectable()
export class PageResolver implements Resolve<any> {

  constructor(
    private httpService: HttpService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.httpService
      .get('https://jsonplaceholder.typicode.com/1');
  }
}

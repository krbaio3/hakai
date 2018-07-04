import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ServerErrorsInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // If the call fails, retry until 5 times before throwing an error
    return next.handle(request).pipe(retry(5));
  }
}

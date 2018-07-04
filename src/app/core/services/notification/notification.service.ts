import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';

import { publish, refCount } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _notification: BehaviorSubject<string> = new BehaviorSubject(null);
  readonly notification$: Observable<string> = this._notification
    .asObservable()
    .pipe(publish())
    .pipe(refCount());

  constructor() {}

  notify(message) {
    this._notification.next(message);
    setTimeout(() => this._notification.next(null), 3000);
  }
}

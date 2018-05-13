import { Injectable } from '@angular/core';
import { UserService } from '../components/user/user.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as userActions from '../actions/user.actions';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';

@Injectable()
export class UserEffects {
  @Effect()
  loadUsers$ = this.actions$
  .ofType(userActions.LOAD_USERS)
  .pipe(
    switchMap(
      () => this.userService.loadUsers()
    ),
    map(
      (users) => new userActions.LoadUsersSuccessAction(users)
    )
  );

  constructor(private userService: UserService, private actions$: Actions) {}
}

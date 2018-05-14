import * as auth from './reducers/auth.reducers';
import { createFeatureSelector } from '@ngrx/store';

export interface AuthState {
  authState: auth.State;
}

export const Reducers = {
  auth: auth.reducer
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');

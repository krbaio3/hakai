import { Injectable } from '@angular/core';
import { delay, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = false;

  // store the url so we can redirect after logging in
  redirectUrl: string;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(user => {
      if (user) {
        this.userDetails = user;
        console.log(this.userDetails);
      } else {
        this.userDetails = null;
      }
    });
  }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(5000),
      tap(val => (this.isLoggedIn = true))
    );
  }

  logOut(): void {
    this.isLoggedIn = false;
  }

  signInWithGooglePopUp(): Promise<firebase.auth.GoogleAuthProvider> {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  signInWithGoogle(email: string, password: string): Promise<any> {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

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

  signInWithGooglePopUp() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  signInWithGoogle(email, password) {
    // return this.firebaseAuth.auth.signInWithPopup(
    //   new firebase.auth.GoogleAuthProvider()
    // );
    return this.firebaseAuth.auth
      .signInWithEmailAndPassword(email, password)
      // .catch(error => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   if (errorCode === 'auth/wrong-password') {
      //     alert('Wrong password.');
      //   } else {
      //     alert(errorMessage);
      //   }
      //   console.log(error);
      // })
      ;
  }

  isLoggedIn(): boolean {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  logout(): void {
    this.firebaseAuth.auth
      .signOut()
      .then(response => this.router.navigate(['/']));
  }
}

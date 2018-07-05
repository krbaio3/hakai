import { Component, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../heroes/models';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('btnClose') btnClose: ElementRef;

  public user: User = new User();
  public userModal: User = new User();

  public message: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public afAuth: AngularFireAuth
  ) {
    this.setMessage();
  }

  onSubmit() {
    this.authService
      .signInWithGoogle(this.user.email, this.user.password)
      .then(response => {
        console.log(`Logeado! ${JSON.stringify(response, null, 4)}`);
        this.router.navigate(['/avenger']);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  // logout() {
  //   this.authService.logout();
  // }

  loginPopUp() {
    this.authService.signInWithGooglePopUp();
  }
  singUp(userModal: NgForm) {
    console.log('entra', userModal);
    this.btnClose.nativeElement.click();
    this.authService.signup(this.userModal.email, this.userModal.password);
  }



  // setMessage() {
  //   this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  // }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl
          ? this.authService.redirectUrl
          : '/';

        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  logOut() {
    this.authService.logOut();
    // this.setMessage();
  }
}

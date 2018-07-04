import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


import { AuthService } from './service/auth.service';
import { User } from './models';

@Component({
  selector: 'app-avenger',
  templateUrl: './avenger.component.html',
  styleUrls: ['./avenger.component.scss'],
  providers: [AuthService]
})
export class AvengerComponent implements OnInit {

  @ViewChild('btnClose') btnClose: ElementRef;
  user: User = new User();
  userModal: User = new User();

  constructor(
    public afAuth: AngularFireAuth,
    private authSrv: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.authSrv
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

  logout() {
    this.authSrv.logout();
  }

  loginPopUp() {
    this.authSrv.signInWithGooglePopUp();
  }
  singUp(userModal: NgForm) {
    console.log('entra', userModal);
    this.btnClose.nativeElement.click();
    // this.authSrv.signup(this.userModal.email, this.userModal.password);
    this.authSrv.signup();
  }

  ///////////////////
}

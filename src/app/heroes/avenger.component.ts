import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { User } from './models';

@Component({
  selector: 'app-avenger',
  templateUrl: './avenger.component.html',
  styleUrls: ['./avenger.component.scss'],
  providers: [AuthService]
})
export class AvengerComponent implements OnInit {
  email: string;
  password: string;

  user: User = new User();

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
}

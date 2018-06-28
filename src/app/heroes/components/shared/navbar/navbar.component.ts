import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authSrv: AuthService,
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit() {}

  buscarHeroe(name: string) {
    console.log(name);
    this.router.navigate(['search', name], { relativeTo: this.route });
  }

  logOut() {
    this.authSrv.logout();
  }
}

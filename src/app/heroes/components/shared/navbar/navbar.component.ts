import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {}

  buscarHeroe(name: string) {
    console.log(name);
    this.router.navigate(['search', name], { relativeTo: this.route });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {
  public routeParams;
  public data;

  constructor(private activatedRoute: ActivatedRoute) {
    console.log('Entra en constructor');
  }

  ngOnInit() {
    this.routeParams = this.activatedRoute.snapshot.queryParams;
    this.data = this.activatedRoute.snapshot.data;
  }
}

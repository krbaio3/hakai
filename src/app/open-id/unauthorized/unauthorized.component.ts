import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent implements OnInit {
  public message: string;
  public values: any[];

  constructor() {
    this.message = 'UnauthorizedComponent constructor';
  }

  ngOnInit() {}
}

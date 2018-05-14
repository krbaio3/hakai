import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hoverSection: HTMLElement;

  constructor() {}

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');
    this.hoverSection.addEventListener('mousemove', this.onMouseMove);
    this.hoverSection.addEventListener('click', this.onClick);
  }

  onMouseMove(ev: MouseEvent) {
    console.log(ev);
  }

  onClick(ev: Event) {
    console.log('click', ev);
  }

  unsubscribe() {
    console.log('Called unsubscribe');
    this.hoverSection.removeEventListener('mousemove', this.onMouseMove);
  }

  subscribe() {
    console.log('Called subscribe');
    this.hoverSection.addEventListener('mousemove', this.onMouseMove);
  }
}

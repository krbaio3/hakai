import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterViewInit,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-miscelaneos',
  templateUrl: './miscelaneos.component.html',
  styleUrls: ['./miscelaneos.component.scss'],
})
export class MiscelaneosComponent implements OnInit {
  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
}

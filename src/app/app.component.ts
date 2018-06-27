import { Component } from '@angular/core';
import { ConfigService } from './app.config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  option = false;

  webApiBaseURL;

  constructor() {
    // this.spoty = true;
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  hiddeOptions() {
    this.option = true;
  }
}

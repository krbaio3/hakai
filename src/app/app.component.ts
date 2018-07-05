import { Component } from '@angular/core';
import { ConfigService } from './app.config.service';
import { LoadingService } from './core/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  option = false;

  public loading: boolean;

  constructor(private loaderService: LoadingService) {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loaderService.status.subscribe((val: boolean) => {
      this.loading = val;
    });
  }

  hiddeOptions() {
    this.option = true;
  }
}

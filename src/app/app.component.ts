import { Component, OnInit } from '@angular/core';
import { ConfigService } from './app.config.service';
import { NotificationService } from './core/services/notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  option = false;

  notification: string;
  showNotification: boolean;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.notificationService.notification$.subscribe(message => {
      this.notification = message;
      this.showNotification = true;
    });
  }

  hiddeOptions() {
    this.option = true;
  }
}

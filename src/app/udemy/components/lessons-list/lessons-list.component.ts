import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements Observer {

  lessons: Lesson[] = [];

  constructor() {
    console.log('Lesson list component is registered ad observer ...');
    globalEventBus.registerObserver(this);
  }

  notify(data: Lesson[]) {
    console.log('Lesson list component recived data ...');
    this.lessons = data;
  }
}

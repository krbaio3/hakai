import { Component, OnInit } from '@angular/core';
import { LESSONS_LIST_AVAILABLE, globalEventBus, ADD_NEW_LESSON } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'app-lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.scss']
})
export class LessonsCounterComponent {

  lessonsCounter = 0;

  constructor() {
    console.log('lesson list component is registered as observer ..');
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);

    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => this.lessonsCounter += 1
    });
  }

  notify(data: Lesson[]) {
    console.log('counter component received data ..');
    this.lessonsCounter = data.length;
  }
}

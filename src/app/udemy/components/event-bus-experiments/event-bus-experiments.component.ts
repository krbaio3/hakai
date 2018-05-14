import { Component, OnInit } from '@angular/core';
import { globalEventBus, LESSONS_LIST_AVAILABLE, ADD_NEW_LESSON } from './event-bus';
import { testLessons } from '../shared/model/test-lesson';

@Component({
  selector: 'app-event-bus-experiments',
  templateUrl: './event-bus-experiments.component.html',
  styleUrls: ['./event-bus-experiments.component.scss']
})
export class EventBusExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Top level component broadCasted all lessons ...');
    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, testLessons.slice(0));
  }

  addLesson(lessonText: string) {
    globalEventBus.notifyObservers(ADD_NEW_LESSON, lessonText);
  }

}

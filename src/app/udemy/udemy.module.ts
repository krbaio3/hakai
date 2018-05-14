import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import {
  AngularMaterialModule
} from '../angular-material/angular-material.module';

import { UdemyRoutingModule } from './udemy.routing';
import { UdemyComponent } from './udemy.component';
import { HomeComponent } from './components/home/home.component';
import { EventBusExperimentsComponent } from './components/event-bus-experiments/event-bus-experiments.component';
import { LessonsListComponent } from './components/lessons-list/lessons-list.component';
import { LessonsCounterComponent } from './components/lessons-counter/lessons-counter.component';

@NgModule({
  imports: [
    CommonModule,
    UdemyRoutingModule,
    AngularMaterialModule
  ],
  declarations: [
    UdemyComponent,
    HomeComponent,
    EventBusExperimentsComponent,
    LessonsListComponent,
    LessonsCounterComponent
  ]
})
export class UdemyModule { }

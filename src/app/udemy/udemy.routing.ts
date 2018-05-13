import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UdemyComponent } from './udemy.component';
import { HomeComponent } from './components/home/home.component';
import { EventBusExperimentsComponent } from './components/event-bus-experiments/event-bus-experiments.component';

const UDEMY_ROUTES: Routes = [
  {
    path: 'udemy',
    component: UdemyComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'event',
        component: EventBusExperimentsComponent
      },
      // {
      //   path: '',
      //   component: HomeComponent
      // },
      // {
      //   path: '',
      //   component: HomeComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(UDEMY_ROUTES)],
  exports: [RouterModule]
})
export class UdemyRoutingModule {}

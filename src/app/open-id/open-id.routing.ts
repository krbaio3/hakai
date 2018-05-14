import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenIdComponent } from './open-id.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'openID',
    component: OpenIdComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenIdRoutingModule {}

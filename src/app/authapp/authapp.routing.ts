import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AuthappComponent } from './authapp.component';
import { HomeComponent } from './components/home/home.component';
import { PrecioComponent } from './components/precio/precio.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  {
    path: 'auth0',
    component: AuthappComponent,
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
        path: 'precio',
        component: PrecioComponent
      },
      {
        path: 'protegida',
        component: ProtegidaComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
      }
    ]
  }
  // {
  //   path: 'acess_token',
  //   redirectTo: 'auth'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthappRoutingModule {}

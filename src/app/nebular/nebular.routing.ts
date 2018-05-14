import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent
} from '@nebular/auth';

import { NebularComponent } from './nebular.component';
import { GridComponent } from './grid/grid.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'auth',
    component: NebularComponent,
    children: [
      {
        path: '',
        component: NbAuthComponent,
        // },
        // {
        //   path: 'auth',
        //   component: NbAuthComponent,
        children: [
          {
            path: '',
            component: NbLoginComponent
          },
          {
            path: 'login',
            component: NbLoginComponent
          },
          {
            path: 'register',
            component: NbRegisterComponent
          },
          {
            path: 'logout',
            component: NbLogoutComponent
          },
          {
            path: 'request-password',
            component: NbRequestPasswordComponent
          },
          {
            path: 'reset-password',
            component: NbResetPasswordComponent
          },
          {
            path: 'sign-in',
            component: GridComponent
          }
        ]
      }
      // {
      //   path: 'path4',
      //   component: Name4Component
      // },
      // {
      //   path: '**',
      //   component: PageNotFoundComponent
      // }
    ]
  }

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NebularRoutingModule {}

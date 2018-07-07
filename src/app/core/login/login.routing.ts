import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthGuard } from '../../auth-guard.service';
import { AuthService } from './auth.service';
import { ComposeMessageComponent } from './compose-message.component';

const LOGIN_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(LOGIN_ROUTES)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService]
})
export class LoginRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
// 3rd Party
import {
  NbSidebarModule,
  NbLayoutModule,
  NbSidebarService,
  NbThemeModule,
  NbUserModule
} from '@nebular/theme';

import {
  NB_AUTH_TOKEN_CLASS,
  NbAuthJWTToken,
  NbEmailPassAuthProvider,
  NbAuthModule
} from '@nebular/auth';


// Componentes
import { NebularComponent } from './nebular.component';
import { GridComponent } from './grid/grid.component';
import { LoginComponent } from './login/login.component';

import { NebularRoutingModule } from './nebular.routing';

const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true
  }
};

@NgModule({
  imports: [
    // this will enable the default theme, you can change this to `cosmic` to enable the dark theme.
    NbThemeModule.forRoot({ name: 'default' }),
    NbAuthModule.forRoot({
      providers: {
        email: {
          service: NbEmailPassAuthProvider,
          config: {
            baseEndpoint: 'http://localhost:3333/api',
            login: {
              endpoint: '/auth/sign-in',
              method: 'post'
            },
            register: {
              endpoint: '/auth/sign-up',
              method: 'post'
            },
            logout: {
              endpoint: '/auth/sign-out',
              method: 'post'
            },
            requestPass: {
              endpoint: '/auth/request-pass',
              method: 'post'
            },
            resetPass: {
              endpoint: '/auth/reset-pass',
              method: 'post'
            },
            token: {
              key: 'token' // this parameter tells Nebular where to look for the token
            }
          }
        }
      },
      forms: {
        login: formSetting,
        register: formSetting,
        requestPassword: formSetting,
        resetPassword: formSetting,
        logout: {
          redirectDelay: 0
        }
      }
    }),
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    CommonModule,
    NebularRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbUserModule
  ],
  declarations: [NebularComponent, GridComponent, LoginComponent],
  providers: [
    NbSidebarService,
    { provide: NB_AUTH_TOKEN_CLASS, useValue: NbAuthJWTToken }
  ] // we need this service for the sidebar
})
export class NebularModule {}

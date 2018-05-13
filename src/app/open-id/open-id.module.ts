import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {
  AuthModule,
  OidcSecurityService,
  OpenIDImplicitFlowConfiguration,
  OidcConfigService,
  AuthWellKnownEndpoints
} from 'angular-auth-oidc-client';

import { OpenIdComponent } from './open-id.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AutoLoginComponent } from './auto-login/auto-login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OpenIdRoutingModule } from './open-id.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    OpenIdRoutingModule,
    AuthModule.forRoot()
  ],
  declarations: [
    OpenIdComponent,
    ForbiddenComponent,
    HomeComponent,
    UnauthorizedComponent,
    HomeComponent,
    AutoLoginComponent,
    NavigationComponent
  ],
  providers: [OidcSecurityService]
})
export class OpenIdModule {
  constructor(
    private oidcSecurityService: OidcSecurityService,
    private oidcConfigService: OidcConfigService,
  ) {
    this.oidcConfigService.onConfigurationLoaded.subscribe(() => {
      const openIDImplicitFlowConfiguration = new OpenIDImplicitFlowConfiguration();
      openIDImplicitFlowConfiguration.stsServer = 'https://accounts.google.com';
      openIDImplicitFlowConfiguration.redirect_url = 'https://localhost:3001';
      openIDImplicitFlowConfiguration.client_id =
        '426998672657-mfitpijk6hmb1vvge1ceig0u4c8pbkog.apps.googleusercontent.com';
      openIDImplicitFlowConfiguration.response_type = 'id_token token';
      openIDImplicitFlowConfiguration.scope = 'openid email profile';
      openIDImplicitFlowConfiguration.post_logout_redirect_uri =
        'https://localhost:3001/Unauthorized';
      openIDImplicitFlowConfiguration.post_login_route = '/home';
      openIDImplicitFlowConfiguration.forbidden_route = '/Forbidden';
      openIDImplicitFlowConfiguration.unauthorized_route = '/Unauthorized';
      openIDImplicitFlowConfiguration.trigger_authorization_result_event = true;
      openIDImplicitFlowConfiguration.log_console_warning_active = true;
      openIDImplicitFlowConfiguration.log_console_debug_active = true;
      openIDImplicitFlowConfiguration.max_id_token_iat_offset_allowed_in_seconds = 20;

      const authWellKnownEndpoints = new AuthWellKnownEndpoints();
      authWellKnownEndpoints.setWellKnownEndpoints(
        this.oidcConfigService.wellKnownEndpoints
      );

      this.oidcSecurityService.setupModule(
        openIDImplicitFlowConfiguration,
        authWellKnownEndpoints
      );
    });

    console.log('APP STARTING');
  }
}

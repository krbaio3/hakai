import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { NgrxAuthRoutingModule } from './ngrx-auth.routing';
import { NgrxAuthComponent } from './ngrx-auth.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/effects/auth.effects';
import { Reducers } from './store/app.states';

@NgModule({
  imports: [
    CommonModule,
    NgrxAuthRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(Reducers, {}),
    EffectsModule.forRoot([AuthEffects])
  ],
  declarations: [
    NgrxAuthComponent,
    LandingComponent,
    SignUpComponent,
    LogInComponent
  ],
  providers: [AuthService]
})
export class NgrxAuthModule {}

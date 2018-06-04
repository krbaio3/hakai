// Angular
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Environments
import { environment } from '../environments/environment';

// 3rd Party
// FireBase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Pipes
// import { PasswordPipe, CapitalizePipe, DomseguroPipe } from './pipes/index';
// import { PipesModule } from './pipes/pipes.module';

// Componentes
import { AppComponent } from './app.component';

// Modulos
import { NebularModule } from './nebular/nebular.module';
import { SpotyModule } from './spoty/spoty.module';
import { HeroesModule } from './heroes/heroes.module';
import { MiscelaneosModule } from './miscelaneos/miscelaneos.module';
import { AuthappModule } from './authapp/authapp.module';
import { FormulariosModule } from './formularios/formularios.module';
import { OpenIdModule } from './open-id/open-id.module';
import { ConsoleModule } from './console/console.module';
import { NgrxAuthModule } from './ngrx-auth/ngrx-auth.module';
import { UdemyModule } from './udemy/udemy.module';

registerLocaleData(localeEs);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.fireConfig), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    HttpModule,
    NebularModule,
    SpotyModule,
    HeroesModule,
    HttpClientModule,
    MiscelaneosModule,
    AuthappModule,
    FormulariosModule,
    OpenIdModule,
    ConsoleModule,
    NgrxAuthModule,
    AppRoutingModule,
    UdemyModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule {}

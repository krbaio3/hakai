import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesRoutingModule } from './heroes/heroes.routing';
import { SpotyRoutingModule } from './spoty/spoty.routing';
import { MiscelaneosRoutingModule } from './miscelaneos/miscelaneos.routing';
import { FormulariosRoutingModule } from './formularios/formularios.routing';
import { NgrxAuthRoutingModule } from './ngrx-auth/ngrx-auth.routing';
import { ConsoleRoutingModule } from './console/console.routing';
import { UdemyRoutingModule } from './udemy/udemy.routing';

import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
    data: { option: false }
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
    data: { option: false }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      useHash: true,  // quitar para que desaparezca el hash de la ruta
      enableTracing: true,
    }),
    HeroesRoutingModule,
    SpotyRoutingModule,
    MiscelaneosRoutingModule,
    FormulariosRoutingModule,
    NgrxAuthRoutingModule,
    ConsoleRoutingModule,
    UdemyRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

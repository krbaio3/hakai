import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvengerComponent } from './avenger.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';

import { HEROE_ROUTES } from './components/heroe/heroe.routing';

const APP_ROUTES: Routes = [
  {
    path: 'avenger',
    component: AvengerComponent,
    children: [
      {
        path: 'log-in',
        component: LogInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      // {
      //   path: '',
      //   component: LandingComponent
      // },
      {
        path: 'landing',
        component: LandingComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'pipes',
        component: PipesComponent
      },
      {
        path: 'heroe',
        component: HeroeComponent,
        children: HEROE_ROUTES
      },
      {
        path: 'search/:name',
        component: SearchComponent
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
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
  providers: []
})
export class HeroesRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvengerComponent } from './avenger.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { AddHeroeComponent } from './components/heroe/addHeroe/add-heroe.component';
import { RemoveHeroeComponent } from './components/heroe/removeHeroe/remove-heroe.component';
import { EditHeroeComponent } from './components/heroe/editHeroe/edit-heroe.component';
import { ShowHeroeComponent } from './components/heroe/showHeroe/show-heroe.component';

import { HEROE_ROUTES } from './components/heroe/heroe.routing';
import { ResolveService } from './service/resolve.service';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';

const APP_ROUTES: Routes = [
  {
    path: 'avenger',
    component: AvengerComponent,
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
        path: 'fotos',
        component: FotosComponent
      },
      {
        path: 'carga',
        component: CargaComponent
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
  providers: [ResolveService]
})
export class HeroesRoutingModule {}

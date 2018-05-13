import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSpotyComponent } from './components/home/home.component';
import { SearchSpotyComponent } from './components/search/search.component';
import { SpotyComponent } from './spoty.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';

const SPOTY_ROUTES: Routes = [
  {
    path: 'spoty',
    component: SpotyComponent,
    children: [
      {
        path: '',
        component: AboutComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'home',
        component: HomeSpotyComponent
      },
      {
        path: 'search',
        component: SearchSpotyComponent
      },
      {
        path: 'artist/:id',
        component: ArtistComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(SPOTY_ROUTES)],
  exports: [RouterModule]
})
export class SpotyRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes.routing';
import { PipesModule } from '../pipes/pipes.module';

// Servicios
import { HeroesService } from './service/heroes.service';
// Componentes
import { AvengerComponent } from './avenger.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { AddHeroeComponent } from './components/heroe/addHeroe/add-heroe.component';
import { RemoveHeroeComponent } from './components/heroe/removeHeroe/remove-heroe.component';
import { EditHeroeComponent } from './components/heroe/editHeroe/edit-heroe.component';
import { ShowHeroeComponent } from './components/heroe/showHeroe/show-heroe.component';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    // AvengerComponent,
  ],
  declarations: [
    AvengerComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchComponent,
    PipesComponent,
    AddHeroeComponent,
    RemoveHeroeComponent,
    EditHeroeComponent,
    ShowHeroeComponent,
  ],
  providers: [HeroesService],
})
export class HeroesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// third party
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLock, faCheck } from '@fortawesome/free-solid-svg-icons';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';

// Modules
import { PipesModule } from '../pipes/pipes.module';
import { CoreModule } from '../core/core.module';

// Routing
import { HeroesRoutingModule } from './heroes.routing';

// Pipes
import { KeysPipe } from './components/heroe/keys.pipe';

// Servicios. Este es para AngularFirebase, de momento, se queda para otra iteracion
// import { HeroesService } from './service/heroes.service';
// import { CargaImagenesService } from './service/carga-imagenes.service';

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
import { LandingComponent } from './components/landing/landing.component';
import { LogInComponent } from './components/log-in/log-in.component';
// import { LoadingComponent } from './components/shared/loading/loading.component';
// import { FotosComponent } from './components/fotos/fotos.component';
// import { CargaComponent } from './components/carga/carga.component';
import { NgDropfilesDirective } from './directives/ng-dropfiles.directive';

library.add(faUser, faLock, faCheck, faGoogle);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    PipesModule,
    ReactiveFormsModule,
    CoreModule
  ],
  exports: [],
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
    KeysPipe,
    LandingComponent,
    LogInComponent,
    // LoadingComponent,
    // FotosComponent,
    // CargaComponent,
    NgDropfilesDirective
  ],
  providers: [
    // CargaImagenesService
  ]
})
export class HeroesModule {}

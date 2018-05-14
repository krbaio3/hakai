import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SpotyRoutingModule } from './spoty.routing';
// Pipes
import { WithOutPicturePipe } from './pipes/with-out-picture.pipe';
import { PipesModule } from '../pipes/pipes.module';

import { HomeSpotyComponent } from './components/home/home.component';
import { SearchSpotyComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { SpotyComponent } from './spoty.component';
import { NavBarSpotyComponent } from './components/shared/nav-bar/nav-bar.component';
import { ArtistComponent } from './components/artist/artist.component';
// Services
import { SpotyService } from './services/spoty.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SpotyRoutingModule,
    PipesModule
  ],
  exports: [
  ],
  declarations: [
    SpotyComponent,
    HomeSpotyComponent,
    NavBarSpotyComponent,
    SearchSpotyComponent,
    AboutComponent,
    WithOutPicturePipe,
    ArtistComponent
  ],
  providers: [SpotyService]
})
export class SpotyModule { }

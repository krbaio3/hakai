import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import './miscelaneos.component.scss';

import { MiscelaneosRoutingModule } from './miscelaneos.routing';

import { NavBarMiscelaneosComponent } from './shared/navBar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { MiscelaneosComponent } from './miscelaneos.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/nuevo/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/editar/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/detalle/usuario-detalle.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  imports: [CommonModule, MiscelaneosRoutingModule],
  exports: [],
  declarations: [
    NavBarMiscelaneosComponent,
    HomeComponent,
    NgStyleComponent,
    CssComponent,
    NgClassComponent,
    ResaltarDirective,
    NgSwitchComponent,
    MiscelaneosComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    AboutComponent,
  ],
})
export class MiscelaneosModule {}

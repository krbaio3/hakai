import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';

import { MiscelaneosComponent } from './miscelaneos.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioDetalleComponent } from './components/usuario/detalle/usuario-detalle.component';
import { UsuarioEditarComponent } from './components/usuario/editar/usuario-editar.component';
import { UsuarioNuevoComponent } from './components/usuario/nuevo/usuario-nuevo.component';
import { AboutComponent } from './components/about/about.component';

const MISCELANEOS_ROUTES: Routes = [
  {
    path: 'miscelaneos',
    component: MiscelaneosComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'usuario',
        component: UsuarioComponent,
        children: USUARIO_ROUTES,
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(MISCELANEOS_ROUTES)],
  exports: [RouterModule],
})
export class MiscelaneosRoutingModule {}

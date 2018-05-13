import { Routes } from '@angular/router';

import { UsuarioComponent } from './usuario.component';
import { UsuarioDetalleComponent } from './detalle/usuario-detalle.component';
import { UsuarioEditarComponent } from './editar/usuario-editar.component';
import { UsuarioNuevoComponent } from './nuevo/usuario-nuevo.component';

export const USUARIO_ROUTES: Routes = [
    {
        path: '',
        component: UsuarioNuevoComponent
      },
      {
        path: 'nuevo',
        component: UsuarioNuevoComponent
      },
      {
        path: 'editar',
        component: UsuarioEditarComponent
      },
      {
        path: 'detalle',
        component: UsuarioDetalleComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'nuevo'
      },
];

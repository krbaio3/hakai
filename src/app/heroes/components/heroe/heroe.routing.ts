import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddHeroeComponent } from './addHeroe/add-heroe.component';
import { EditHeroeComponent } from './editHeroe/edit-heroe.component';
import { RemoveHeroeComponent } from './removeHeroe/remove-heroe.component';
import { ShowHeroeComponent } from './showHeroe/show-heroe.component';
import { ResolveService } from '../../service/resolve.service';

export const HEROE_ROUTES: Routes = [
  {
    path: 'addHeroe',
    component: AddHeroeComponent,
  },
  {
    path: ':id/show',
    component: ShowHeroeComponent,
    resolve: { message: ResolveService}
  },
  {
    path: ':id/edit',
    component: EditHeroeComponent,
  },
  {
    path: ':id/remove',
    component: RemoveHeroeComponent,
  },
];

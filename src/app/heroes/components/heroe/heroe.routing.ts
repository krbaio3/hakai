import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddHeroeComponent } from './addHeroe/add-heroe.component';
import { EditHeroeComponent } from './editHeroe/edit-heroe.component';
import { RemoveHeroeComponent } from './removeHeroe/remove-heroe.component';
import { ShowHeroeComponent } from './showHeroe/show-heroe.component';

export const HEROE_ROUTES: Routes = [
  {
    path: 'addHeroe',
    component: AddHeroeComponent,
  },
  {
    path: 'show/:id',
    component: ShowHeroeComponent,
    // resolve: { message: ResolveService}
  },
  {
    path: 'edit/:id',
    component: EditHeroeComponent,
  },
  {
    path: 'remove/:id',
    component: RemoveHeroeComponent,
  },
];

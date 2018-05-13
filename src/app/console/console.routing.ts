import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsoleComponent } from './console.component';
import { InitialComponent } from './components/initial/initial.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';

const CONSOLE_ROUTES: Routes = [
  {
    path: 'initial',
    component: ConsoleComponent,
    children: [
      { path: '', component: InitialComponent },
      { path: 'user/list', component: UserListComponent },
      { path: 'user/edit/:id', component: UserEditComponent },
      {
        path: 'home',
        loadChildren: 'app/console/components/home/home.module#HomeModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(CONSOLE_ROUTES)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ConsoleRoutingModule } from './console.routing';
import { ConsoleComponent } from './console.component';
import { InitialComponent } from './components/initial/initial.component';

import { counterReducer, userReducer } from './reducers';
import { UserService } from './components/user/user.service';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserTableComponent } from './components/user/user-table/user-table.component';
import { UserEffects } from './effects/user.effects';

@NgModule({
  imports: [
    CommonModule,
    ConsoleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      counter: counterReducer,
      users: userReducer
    }),
    EffectsModule.forRoot([UserEffects])
  ],
  declarations: [
    ConsoleComponent,
    InitialComponent,
    UserEditComponent,
    UserListComponent,
    UserTableComponent
  ],
  providers: [UserService]
})
export class ConsoleModule {}

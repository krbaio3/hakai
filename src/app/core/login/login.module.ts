import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLock, faCheck } from '@fortawesome/free-solid-svg-icons';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';

// Modules
import { LoginRoutingModule } from './login.routing';

// Components
import { LoginComponent } from './login.component';
import { ComposeMessageComponent } from './compose-message.component';

library.add(faCheck, faGoogle, faLock, faUser);

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  declarations: [LoginComponent, ComposeMessageComponent],
  exports: [LoginComponent, ComposeMessageComponent]
})
export class LoginModule {}

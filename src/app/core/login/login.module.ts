import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { LoginRoutingModule } from './login.routing';

// Components
import { LoginComponent } from './login.component';

@NgModule({
  imports: [CommonModule, LoginRoutingModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule {}

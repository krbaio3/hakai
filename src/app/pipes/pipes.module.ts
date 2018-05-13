import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './components/capitalizado.pipe';
import { DomseguroPipe } from './components/dom-seguro.pipe';
import { PasswordPipe } from './components/password.pipe';
@NgModule({
  imports: [CommonModule],
  declarations: [CapitalizePipe, DomseguroPipe, PasswordPipe],
  exports: [CapitalizePipe, DomseguroPipe, PasswordPipe],
})
export class PipesModule {}

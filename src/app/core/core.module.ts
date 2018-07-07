import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './loading/loading.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { LoginModule } from './login/login.module';
import { ComposeMessageComponent } from './login/compose-message.component';

library.add(faSpinner);

@NgModule({
  imports: [CommonModule, FontAwesomeModule, LoginModule],
  declarations: [LoadingComponent],
  exports: [LoadingComponent]
})
export class CoreModule {}

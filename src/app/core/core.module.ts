import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorService } from './error/errors-handler/error.service';
import { ServerErrorsInterceptor } from './error/server-errors-interceptors/server-errors.interceptor';
import { ErrorsComponent } from './error';
import { ErrorRoutingModule } from './error/errors-routing/errors.routing';

@NgModule({
  imports: [CommonModule, ErrorRoutingModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorsInterceptor,
      multi: true
    }
  ],
  declarations: [ErrorsComponent]
})
export class CoreModule {}

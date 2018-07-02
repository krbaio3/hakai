import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServerErrorsInterceptor } from './server-errors/server-errors.service';
import { ErrorHandlerService } from './error-handler.service';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { ErrorComponent } from './error-component/error.component';

@NgModule({
  imports: [CommonModule, RouterModule, ErrorRoutingModule],
  // exports: [ErrorHandlerModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorsInterceptor,
      multi: true
    }
  ],
  declarations: [ErrorComponent]
})
export class ErrorHandlerModule {}

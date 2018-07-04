import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';

import * as StackTraceParser from 'error-stack-parser';

import { NotificationService } from '../../services/notification/notification.service';
import { ErrorsService } from '../errors-service/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: Error | HttpErrorResponse) {
    const notificationService = this.injector.get(NotificationService);
    const errorsService = this.injector.get(ErrorsService);
    const router = this.injector.get(Router);

    if (error instanceof HttpErrorResponse) {
      // Server error happened
      if (!navigator.onLine) {
        // No Internet connection
        return notificationService.notify('No Internet Connection');
      }
      // Http Error
      // Send the error to the server
      errorsService.log(error).subscribe();
      // Show notification to the user
      return notificationService.notify(`${error.status} - ${error.message}`);
    } else {
      // Client Error Happend
      // Send the error to the server and then
      // redirect the user to the page with all the info
      errorsService.log(error).subscribe(errorWithContextInfo => {
        router.navigate(['/error'], { queryParams: errorWithContextInfo });
      });
    }
  }
}

/*
EXPLANATION:
2 tipos de errores en función de su causa:
- Externos: Fallo del Servidor (5xx), Internet, Navegador...

- Propios:
  Podemos distinguir 2 en función de quien notifica el error:

  - Servidor:
    Parece no haber un estandar de diseño, pueden contener:
    - status (404 Not Found, 403 Forbidden...)
    - name
    - message

  - Cliente:
    Basados en el constructor genérico Error, los más comunes son
    ReferenceError (llamar a una variable inexistente) and TypeError
    (xej: llamar a una var como si fuera una función). Contienen:
    - name
    - message
    - fileName, lineNumber, columnNumber y stack (en función del
    navegador).

    Ejemplos:
    tan // ReferenceError
    var y = 5;
    y(); // TypeError
    var err = new Error('Aiii');
    var err = new TypeError('Aiii');

    // Lanzamos una excepción con throw
    function errorFlint() {
      throw new Error('Oooooouuu');
    }

    // Una excepción irá eliminando del stack todas las funciones
    // llamadas previamente, hasta que sea controlada (handle).
    // Si no es controlada, vaciará el stack, cargándose la app
    // Angular.

    function fun3() {
     throw new Error('Ups!');
    }

    function fun2() {
        fun3();
    }

    function fun1() {
        fun2()
    }
    debugger
    fun1();

    // Handling the error
    function fun3() {
      throw new Error('Ups!');
    }

    function fun2() {
      try {
        fun3();
      } catch (error) {
        console.log('Shiiit: ', error);
      }
    }

    function fun1() {
        fun2()
    }
    debugger
    fun1();

  // Ejemplo con funciones reales

  function multiply (a, b) {
    return a * z;
  }

  function square (n) {
    return multiply (n, n);
  }

  function printSquared (n) {
    var squared = square(n);
    console.log(squared);
  }
  debugger
  printSquared(4);

  function multiply (a, b) {
    return a * z;
  }

  function square (n) {
    try {
      return multiply (n, n);
      } catch (error) {
      console.log('Shiiit: ', error);
      return 'X';
    }
  }

  function printSquared (n) {
    var squared = square(n);
    console.log('Squared: ', squared);
  }
  debugger
  printSquared(4);

  // En Angular, disponemos de un Try Catch global, el ErrorHandler
  1 - Mostramos declaración en providers
  2 - Mostramos Throw
  3 - Cómo reconocer el tipo de error (Descomentamos Handler)
  4 - Cómo reaccionar a cada tipo de error (Opinionated) NotService
  5 - Cómo trackear los errores ()
*/

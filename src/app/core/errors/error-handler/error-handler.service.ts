import { ErrorHandler, Injectable, Injector} from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import * as StackTraceParser from 'error-stack-parser';

import { NotificationService } from '../../services/notification/notification.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  constructor(
    private injector: Injector,
  ) {}

  handleError(error: Error | HttpErrorResponse) {
    const notificationService = this.injector.get(NotificationService);
    const router = this.injector.get(Router);

    if (error instanceof HttpErrorResponse) {
    // Server error happened
      if (!navigator.onLine) {
        // No Internet connection
        return notificationService.notify('No Internet Connection');
      }
      // Http Error
      return notificationService.notify(`${error.status} - ${error.message}`);
    } else {
      // Client Error Happend
      router.navigate(['/error'], { queryParams: {error: error} });
    }
    // Log the error anyway
    console.error(error);
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


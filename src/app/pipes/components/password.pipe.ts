import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password',
})
export class PasswordPipe implements PipeTransform {
  transform(value: string, activar: boolean = true): string {
    console.log(value);
    if (activar) {
      let cadena = '';
      for (let index = 0; index < value.length; index++) {
        cadena += '*';
      }
      return cadena;
    }
    return value;
  }
}

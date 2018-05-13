import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, todas: boolean = true): string {
    value = value.toLocaleLowerCase();

    const nombres = value.split(' ');

    if (todas) {
      for (const i in nombres) {
        if (nombres.hasOwnProperty(i)) {
          nombres[i] = nombres[i][0].toLocaleUpperCase() + nombres[i].substr(1);
        }
      }
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }

    return nombres.join(' ');
  }
}

import { Injectable } from '@angular/core';
import { Editorial } from '../models/I-Editorial';
import { CONSTANTES } from '../heroe.constans';
import { Http } from '@angular/http';

import { Heroe } from '../models/I-AddHeroe';
// import { Utils } from '../utils';

@Injectable()
export class ShowHeroeService {

  heroeURL = CONSTANTES.heroesURL;

  constructor(private http: Http) {}

  showHeroe ( key$: string, heroe: Heroe) {
    const url = `${ this.heroeURL }/${ key$ }.json`;

    return this.http.get(this.heroeURL)
    .map(response => {
      console.log(response.json());
      return response.json;
    });
  }

  getEditorial(): Editorial[] {
    // crear una tabla MongoDB
    return [{ value: 'DC', code: 'dc' }, { value: 'Marvel', code: 'marvel' }];
  }
}

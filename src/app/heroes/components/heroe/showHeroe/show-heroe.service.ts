import { Injectable } from '@angular/core';
import { Editorial } from '../models/I-Editorial';
import { CONSTANTES } from '../heroe.constans';
import { Http, RequestOptions, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

import { Heroe } from '../models/I-AddHeroe';
// import { Utils } from '../utils';

@Injectable({ providedIn: 'root' })
export class ShowHeroeService {
  heroeURL = CONSTANTES.heroeURL;

  constructor(private http: Http) {}

  getHeroe(key$: string) {
    const url = `${this.heroeURL}/${key$}.json`;

    // return this.http.get(url).map(response => {
    //   console.log(response.json());
    //   return response.json();
    // });
  }

  getEditorial(): Editorial[] {
    // crear una tabla MongoDB
    return [{ value: 'DC', code: 'dc' }, { value: 'Marvel', code: 'marvel' }];
  }
}

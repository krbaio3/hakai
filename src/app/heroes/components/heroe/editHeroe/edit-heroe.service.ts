import { Injectable } from '@angular/core';
import { Editorial } from '../models/I-Editorial';
import { CONSTANTES } from '../heroe.constans';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../models/I-AddHeroe';
// import { Utils } from '../utils';

@Injectable()
export class EditHeroeService {
  heroeURL = CONSTANTES.heroeURL;

  headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http) {}

  actualizarHeroe(heroe: Heroe, key$: string) {
    const body = JSON.stringify(heroe);
    const headers = this.headers;
    const url = `${this.heroeURL}/${key$}.json`;

    return this.http.put(url, body, { headers }).map(response => {
      console.log(response.json());
      return response.json();
    });
  }

  getHeroe (key$: string) {
    const url = `${ this.heroeURL }/${ key$ }.json`;

    return this.http.get(url).map(response => {
      console.log(response.json());
      return response.json();
    });
  }

  getEditorial(): Editorial[] {
    // crear una tabla MongoDB
    return [{ value: 'DC', code: 'dc' }, { value: 'Marvel', code: 'marvel' }];
  }
}

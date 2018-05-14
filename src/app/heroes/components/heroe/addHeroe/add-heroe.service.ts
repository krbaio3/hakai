import { Injectable } from '@angular/core';
import { Editorial } from '../models/I-Editorial';
import { CONSTANTES } from '../heroe.constans';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../models/I-AddHeroe';
// import { Utils } from '../utils';

@Injectable()
export class AddHeroeService {

  heroeURL = CONSTANTES.heroesURL;

  headers: Headers = new Headers({
      'Content-Type': 'application/json'
    });

  constructor(private http: Http) {}

  nuevoHeroe (heroe: Heroe) {
    const body =  JSON.stringify(heroe);
    const headers = this.headers;

    return this.http.post(this.heroeURL, body, { headers })
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

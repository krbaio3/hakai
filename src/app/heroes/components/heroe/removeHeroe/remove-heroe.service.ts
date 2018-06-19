import { Injectable } from '@angular/core';
import { CONSTANTES } from '../heroe.constans';
import { Http } from '@angular/http';

@Injectable({   providedIn: 'root' })
export class RemoveHeroeService {
  heroeURL = CONSTANTES.heroeURL;

  constructor(private http: Http) {}

  getHeroe (key$: string) {
    const url = `${ this.heroeURL }/${ key$ }.json`;

    // return this.http.get(url).map(response => {
    //   console.log(response.json());
    //   return response.json();
    // });
  }

  deleteHeroe(key$: string) {
    const url = `${this.heroeURL}/${key$}.json`;

    // return this.http.delete(url).map(response => {
    //   console.log(response.json());
    //   return response.json();
    // });
  }
}

import { Injectable } from '@angular/core';
import { CONSTANTES } from '../heroe/heroe.constans';
import { Http } from '@angular/http';
import { Heroe } from '../heroe/models/I-AddHeroe';
import { forEach } from '@angular/router/src/utils/collection';

// import { Utils } from '../utils';

@Injectable()
export class ShowHeroesService {

  heroesURL = CONSTANTES.heroesURL;
  heroes = [];

  constructor(private http: Http) {}

  // getHeroes2() {
  //   const url = `${ this.heroesURL }`;

  //   return this.http.get(this.heroesURL).map(response => {
  //     console.log(response.json());
  //     const res = response.json();
  //     for (let key$ in res) {
  //       if (res.hasOwnProperty(key$)) {
  //         this.heroes.push(res[key$]);
  //       }
  //     }
  //     console.log(this.heroes);

  //     // for (let heroe of res) {
  //     //   console.log(heroe);
  //     //   this.heroes.push(heroe);
  //     // }
  //     return this.heroes;
  //   });
  // }

  getHeroes () {
    return this.http.get(this.heroesURL)
      .map(response => {
        console.log(response.json());
        return response.json();
      });
  }
}

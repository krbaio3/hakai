import { Injectable } from '@angular/core';

import { Heroe } from '../models/heroe.model';


@Injectable({   providedIn: 'root' })
export class HeroesService {

  private heroes: Heroe[];

  constructor() {
    // console.log(`Esto es this.heroes: ${this.asyncPipe.transform(this.heroes)}`);
  }

  getHeroes() {
    return this.heroes;
  }

  addHeroe(heroe: Heroe) {
  }

  deleteHeroe(heroe: Heroe) {
  }

  updateHeroe(heroe: Heroe) {
  }


  searchHeroes(name: string): Heroe[] {
    const heroesArr: Heroe[] = [];
    name = name.toLocaleLowerCase();
    let count = 0;
    for (const heroe of this.getHeroes()) {
      count++;
      const nombre = heroe.nombre.toLocaleLowerCase();
      if (nombre.indexOf(name) >= 0) {
        const miHeroe = Object.assign(heroe, { indice: count });
        heroesArr.push(miHeroe);
      }
    }
    return heroesArr;
  }
}

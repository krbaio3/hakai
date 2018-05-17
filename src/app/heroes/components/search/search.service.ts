import { Injectable } from '@angular/core';

import { Heroe } from '../../models/heroe.model';

import { ShowHeroesService } from '../heroes/show-heroes.service';

@Injectable()
export class SearchService {
  private heroes: Heroe[];

  constructor(private _showHeroesServices: ShowHeroesService) {
    // console.log(`Esto es this.heroes: ${this.asyncPipe.transform(this.heroes)}`);
  }

  getHeroes() {
    return this.heroes;
  }

  addHeroe(heroe: Heroe) {}

  deleteHeroe(heroe: Heroe) {}

  updateHeroe(heroe: Heroe) {}

  searchHeroes(name: string): Heroe[] {
    const heroesArr: Heroe[] = [];
    name = name.toLocaleLowerCase();
    this._showHeroesServices.getHeroes().subscribe(
      data => {
        console.log(data);
        const values = Object.keys(data);
        // let count = 0;
        // let Heroes = Object.values(data);
        // for (const heroe of Object.values(data)) {
        //   if(heroe.hasOwnProperty('name')){
        //     if (nombre.indexOf(name) >= 0) {
            //     const miHeroe = Object.assign(heroe, {
            //         indice: count
        //     });
        //     heroesArr.push(miHeroe);
        //     }

        //   }
        //   count++;
        //   const nombre = heroe.nombre.toLocaleLowerCase();
        // }
        //   const values = Object.keys(data).map(key => data[key]).map(x => console.log(x.nombre));
        //   const values2 = (<any>Object).values(data).map(key => console.log(key));
        (<any>Object).values(data).map(((heroe: Heroe, index) => {
            if (heroe.nombre.toLocaleLowerCase().indexOf(name) >= 0) {
                data[values[index]].indice = values[index];
                heroesArr.push(data[values[index]]);
                console.log(data[values[index]]);
            }
        }));
      },
      error => console.error(error)
    );
    return heroesArr;
  }
}

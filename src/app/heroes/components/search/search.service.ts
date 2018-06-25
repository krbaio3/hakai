import { Injectable } from '@angular/core';

import { Heroe } from '../../models/heroe.model';

import {HeroesService} from '../../service/heroes.service';

@Injectable({   providedIn: 'root' })
export class SearchService {
  private heroes: Heroe[];

  constructor(private _heroesSrv: HeroesService) {
  }

  getHeroes() {
    return this.heroes;
  }
}

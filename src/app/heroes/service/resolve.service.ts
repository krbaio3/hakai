import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { HeroesService } from './heroes.service';

@Injectable()
export class ResolveService implements Resolve<any> {
  constructor(private heroesSrv: HeroesService) {}

  resolve() {
    return Observable.of('Hello Word').delay(2000);
    // return this.heroesSrv.getHeroe(1);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';
import { Heroe } from '../../../models/heroe.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  // heroes: Heroe[] = [];
  heroes: Observable<Heroe[]>;
  constructor(
    private _heroesSrv: HeroesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    console.log('constructor Heroes');
  }

  ngOnInit() {
    console.log('ngOninit');
    this.heroes = this._heroesSrv.getHeroes();
  }

  verHeroe(indice: number) {
    console.log(indice);
    this.router.navigate(['../heroe', indice], { relativeTo: this.route });
  }

  goToEdit(indice: string) {
    console.log('editar');
    console.log(`indice ${indice}`);
  }

  gotToRemove(indice: string) {
    console.log('eliminar');
    console.log(`indice ${indice}`);
  }

}

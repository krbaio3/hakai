import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../service/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../../models/heroe.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // heroes: Heroe[] = [];
  // heroes: void;
  heroes;
  buscado: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['name']);
      this.buscado = params['name'];
      this.heroes = this._heroeService.searchHeroes(params['name']);
      console.log(this.heroes);
    });
  }

  verHeroe(heroe: any) {
    console.log(heroe.indice);
    this.router.navigate(['../../heroe', heroe.indice - 1], {
      relativeTo: this.activatedRoute
    });
  }
}

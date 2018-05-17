import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../models/heroe.model';
import { ShowHeroesService } from '../heroes/show-heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SearchService, ShowHeroesService]
})
export class SearchComponent implements OnInit {
  // heroes: Heroe[] = [];
  // heroes: void;
  heroes;
  buscado: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: SearchService,
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

  // verHeroe(heroe: any) {
  //   console.log(heroe.indice);
  //   this.router.navigate(['../../heroe/show', heroe.indice], {
  //     relativeTo: this.activatedRoute
  //   });
  // }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowHeroesService } from './show-heroes.service';
import { Heroe } from '../../models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [ShowHeroesService]
})
export class HeroesComponent implements OnInit {

  // heroes;
  heroes: any[] = [];

  constructor(
    private _showHeroeSrv: ShowHeroesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log('constructor Heroes');
    this._showHeroeSrv.getHeroes().subscribe(
      data => {
        console.log(data);
        this.heroes = data;
      },
      error => console.error(error)
    );
  }

  ngOnInit() {
    console.log('ngOninit');
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

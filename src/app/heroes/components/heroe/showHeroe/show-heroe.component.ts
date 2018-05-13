import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HeroesService } from '../../../service/heroes.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-show-heroe',
  templateUrl: './show-heroe.component.html',
  styleUrls: ['./show-heroe.component.scss']
})
export class ShowHeroeComponent implements OnInit {
  heroe: any = {};
  private paramSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService
  ) {
    activatedRoute.params.subscribe((params) => {
      console.log(params.id);
      // this.heroes = this._heroeService.getHeroes();
      this.heroe = this._heroeService.getHeroe(params['id']);
      
    });
  }

  ngOnInit() {}
}

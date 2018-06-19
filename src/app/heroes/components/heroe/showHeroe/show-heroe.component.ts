import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import {ShowHeroeService} from './show-heroe.service';
import { Heroe } from '../models/I-AddHeroe';

@Component({
  selector: 'app-show-heroe',
  templateUrl: './show-heroe.component.html',
  styleUrls: ['./show-heroe.component.scss'],
  providers: [ShowHeroeService]
})
export class ShowHeroeComponent implements OnInit {

  heroe;
  id: string;

  private paramSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _showHeroeService: ShowHeroeService
  ) {

    this.route.params.subscribe((params) => {
      console.log(params.id);
      this.id = params['id'];
      this._showHeroeService.getHeroe(this.id)
      // .subscribe(heroe => {
      //   console.log(heroe);
      //   this.heroe = heroe;
      // });
    });
  }

  ngOnInit() {
  }
}

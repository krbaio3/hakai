import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ShowHeroeService } from './show-heroe.service';
import { Heroe } from '../../../models/heroe.model';
import { Editorial } from '../models/I-Editorial';

@Component({
  selector: 'app-show-heroe',
  templateUrl: './show-heroe.component.html',
  styleUrls: ['./show-heroe.component.scss'],
  providers: [ShowHeroeService]
})
export class ShowHeroeComponent implements OnInit {
  heroe: Heroe;
  editoriales: Editorial[];
  id: string;
  editHeroeService: any;

  constructor(
    private route: ActivatedRoute,
    private showHeroeService: ShowHeroeService,
  ) {
    this.route.params.subscribe(params => {
      console.log(
        `entra en editar con parametros: ${JSON.stringify(params, null, 4)}`
      );
      this.id = params['id'];
      this.showHeroeService
        .getHeroeAngularFire(this.id)
        .subscribe(heroe => {
          console.log(heroe);
          this.heroe = heroe;
        });
    });
  }

  ngOnInit(): void {
    this.editoriales = this.showHeroeService.getEditorial();
  }
}

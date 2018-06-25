import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RemoveHeroeService } from './remove-heroe.service';
import { Editorial } from '../models/I-Editorial';
import { Heroe } from '../models/I-AddHeroe';
// import { HeroesService } from '../../../service/heroes.service';

@Component({
  selector: 'app-remove-heroe',
  templateUrl: './remove-heroe.component.html',
  styleUrls: ['./remove-heroe.component.scss'],
  providers: [RemoveHeroeService]
})
export class RemoveHeroeComponent implements OnInit {
  heroe: Heroe;
  id: string;
  editoriales: Editorial[];

  constructor(
    private route: ActivatedRoute,
    private removeHeroeService: RemoveHeroeService,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      console.log(
        `entra en editar con parametros: ${JSON.stringify(params, null, 4)}`
      );
      this.id = params['id'];
      this.removeHeroeService.getHeroeAngularFire(this.id).subscribe(heroe => {
        console.log(heroe);
        this.heroe = heroe;
        this.heroe.key$ = this.id;

      });
    });
  }

  ngOnInit(): void {
    this.editoriales = this.removeHeroeService.getEditorial();
  }

  deleteHeroe(heroe: Heroe): void {
    this.removeHeroeService.deleteFileupload(heroe)
      .then((data) => console.log(`Se ha borrado ${data}`))
      .catch(error =>
        console.error(`Error: ${JSON.stringify(error, null, 4)}`)
      );
  }
}

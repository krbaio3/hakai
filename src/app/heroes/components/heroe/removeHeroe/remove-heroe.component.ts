import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../../service/heroes.service';
import { Heroe, Editorial } from '../../../models';

@Component({
  selector: 'app-remove-heroe',
  templateUrl: './remove-heroe.component.html',
  styleUrls: ['./remove-heroe.component.scss'],
  providers: [HeroesService]
})
export class RemoveHeroeComponent implements OnInit {
  heroe: Heroe;
  id: string;
  editoriales: Editorial[];

  constructor(
    private route: ActivatedRoute,
    private removeHeroeService: HeroesService,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      console.log(
        `entra en editar con parametros: ${JSON.stringify(params, null, 4)}`
      );
      this.id = params['id'];
      this.removeHeroeService.getHeroeAngularFire(this.id).subscribe(heroe => {
        console.log(heroe);
        if (heroe !== undefined) {
          this.heroe = heroe;
          this.heroe.id = this.id;
          // this.heroe.imgURL = this.removeHeroeService.downloadProfileUrl(this.heroe.img);
        }
      });
    });
  }

  ngOnInit(): void {
    this.editoriales = this.removeHeroeService.getEditorial();
  }

  deleteHeroe(heroe: Heroe): void {
    this.removeHeroeService
      .deleteFileupload(heroe)
      .then(data => {
        console.log(`Se ha borrado ${data}`);
        this.router.navigate(['/avenger/heroes']);
      })
      .catch(error =>
        console.error(`Error: ${JSON.stringify(error, null, 4)}`)
      );
  }
}

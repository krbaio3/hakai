import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RemoveHeroeService } from './remove-heroe.service';
// import { HeroesService } from '../../../service/heroes.service';

@Component({
  selector: 'app-remove-heroe',
  templateUrl: './remove-heroe.component.html',
  styleUrls: ['./remove-heroe.component.scss'],
  providers: [RemoveHeroeService]
})
export class RemoveHeroeComponent implements OnInit {

  heroe: any = {};
  id: string;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private _removeHeroeService: RemoveHeroeService
  ) {

    // this.route.params.subscribe((params) => {
    //   console.log(params.id);
    //   this.id = params['id'];
    //   this._removeHeroeService.getHeroe(this.id)
    //     .subscribe(heroe => {
    //       console.log(heroe);
    //       heroe.indice = this.id;
    //       this.heroe = heroe;
    //     });
    // });
  }

  ngOnInit() {}

  deleteHeroe(key$: string) {
    // this._removeHeroeService
    //   .deleteHeroe(key$)
    //   .subscribe(response => {
    //     if (response === null) {
    //       this.router.navigate(['/avenger/heroes']);
    //     }
    //   }, error => {
    //     console.error(error);
    //   });
  }
}

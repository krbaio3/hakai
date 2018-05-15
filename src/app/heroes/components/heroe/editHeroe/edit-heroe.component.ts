import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditHeroeService } from './edit-heroe.service';
import { Heroe } from '../models/I-AddHeroe';
import { Editorial } from '../models/I-Editorial';

@Component({
  selector: 'app-edit-heroe',
  templateUrl: './edit-heroe.component.html',
  styleUrls: ['./edit-heroe.component.scss'],
  providers: [EditHeroeService]
})
export class EditHeroeComponent implements OnInit {
  heroe: Heroe = {
    nombre: '',
    bio: '',
    editorial: '',
    aparicion: '',
    img: '',
    imgURL: ''
  };

  editoriales: Editorial[];
  id: string;

  constructor(
    private route: ActivatedRoute,
    private editHeroeService: EditHeroeService,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      console.log(`entra en editar con parametros: ${JSON.stringify(params, null, 4)}`);
      this.id = params['id'];
      this.editHeroeService.getHeroe(this.id)
        .subscribe(heroe =>
        this.heroe = heroe );
    });
  }

  ngOnInit(): void {
    this.editoriales = this.editHeroeService.getEditorial();
  }

  onEdit() {
    console.log(`Valor: ${JSON.stringify(this.heroe, null, 4)}`);
    this.editHeroeService.actualizarHeroe(this.heroe, this.id).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/avenger/heroes']);
      },
      error => console.error(error)
    );
  }
}

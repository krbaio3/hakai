import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AddHeroeService } from './add-heroe.service';
import { Heroe } from '../models/I-AddHeroe';
import { Editorial } from '../models/I-Editorial';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styleUrls: ['./add-heroe.component.scss'],
  providers: [AddHeroeService]
})
export class AddHeroeComponent implements OnInit {
  heroe: Heroe = {
    nombre: '',
    bio: '',
    editorial: '',
    aparicion: '',
    img: '',
    imgURL: ''
  };

  editoriales: Editorial[];

  constructor(
    private heroAddService: AddHeroeService,
    private router: Router
  ) {}

  onSubmit() {
    console.log(`Valor: ${JSON.stringify(this.heroe, null, 4)}`);
    this.heroAddService.nuevoHeroe(this.heroe).subscribe(
      data => {
        this.router.navigate(['../heroe', data.name]);
      },
      error => console.error(error)
    );
  }

  ngOnInit (): void {
    this.editoriales = this.heroAddService.getEditorial();
  }

}

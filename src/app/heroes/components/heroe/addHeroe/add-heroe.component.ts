import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, NgForm } from '@angular/forms';

import { HeroeAddService } from './heroe-add.service';
import { HeroesService } from '../../../service/heroes.service';
import { Heroe } from '../models/I-AddHeroe';
import { Editorial } from '../models/I-Editorial';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styleUrls: ['./add-heroe.component.scss'],
  providers: [HeroeAddService],
})
export class AddHeroeComponent implements OnInit {


  heroe: Heroe = {
    nombre: '',
    bio: '',
    editorial: '',
    aparicion: '',
    img: '',
    imgURL: '',
  };

  editoriales: Editorial[];


  constructor(
    private heroeSrv: HeroesService,
    private heroAddService: HeroeAddService,
  ) {
  }

  ngOnInit() {
    this.editoriales = this.heroAddService.getEditorial();
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file:File = inputValue.files[0];
    this.heroe.img = inputValue.files[0].name;
    const myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.heroe.imgURL = myReader.result;
    };

    myReader.readAsDataURL(file);
  }

  onSubmit() {
    console.log(`Valor: ${JSON.stringify(this.heroe, null, 4)}`);
  }
}

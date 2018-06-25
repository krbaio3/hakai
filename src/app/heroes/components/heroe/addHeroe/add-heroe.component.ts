import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { HeroesService } from '../../../service/heroes.service';
import { Heroe, Editorial, FileItem } from '../../../models';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styleUrls: ['./add-heroe.component.scss'],
  providers: [HeroesService]
})
export class AddHeroeComponent implements OnInit {
  heroe: Heroe;

  editoriales: Editorial[];
  progress: { porcentaje: number } = { porcentaje: 0 };

  fileToUpload: File = null;
  archivo: FileItem;
  overDrop: boolean = false;
  selectedFile: File;

  constructor(private heroAddService: HeroesService, private router: Router) {
    this.resetHero();
  }

  ngOnInit(): void {
    this.editoriales = this.heroAddService.getEditorial();
  }

  onSubmit() {
    console.log(`Valor: ${JSON.stringify(this.heroe, null, 4)}`);

    this.heroe = Object.assign(this.heroe, {
      img: this.selectedFile.name
    });

    this.loadImages();
    // .then(() => this.router.navigate(['/avenger/heroes']))
    // .catch(error => console.error(`Error: ${error}`));
  }

  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      this.selectedFile = file;
    } else {
      alert('invalid format!');
    }
  }

  /////////////////////////////

  private loadImages() {
    const file = this.selectedFile;
    this.selectedFile = undefined;

    this.archivo = new FileItem(file);
    this.heroAddService
      .uploadImagenesFirebase(this.heroe, this.archivo, this.progress)
      .then(response => {
        console.log('Entra', response);
        this.router.navigate(['/avenger/heroes']);
      })
      .catch(error => {
        console.error(`Error: ${error}`);
      });
  }

  private resetHero(): void {
    // Object.keys(this.heroe).forEach(k => (this.heroe[k] = ''));
    // console.log(this.heroe);

    this.heroe = {
      nombre: '',
      bio: '',
      editorial: '',
      aparicion: '',
      img: ''
    };
  }

  pruebaSobreElemento(event) {
    console.log(event);
  }

  cleanFiles() {
    console.log('limpiar Archivos');
    this.archivo = null;
  }
}

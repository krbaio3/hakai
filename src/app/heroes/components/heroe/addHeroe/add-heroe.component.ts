import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AddHeroeService } from './add-heroe.service';
import { Heroe } from '../models/I-AddHeroe';
import { Editorial } from '../models/I-Editorial';
import { CargaImagenesService } from '../../../service/carga-imagenes.service';
import { FileItem } from '../../../models/file-item';

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

  fileToUpload: File = null;

  archivos: FileItem[] = [];
  overDrop: boolean = false;

  constructor(
    private heroAddService: AddHeroeService,
    private router: Router,
    public cargaImagenesSrv: CargaImagenesService
  ) {}

  onSubmit() {
    console.log(`Valor: ${JSON.stringify(this.heroe, null, 4)}`);

    this.loadImages();

    this.heroAddService.nuevoHeroe(this.heroe).subscribe(
      data => {
        this.router.navigate(['/avenger/heroes']);
      },
      error => console.error(error)
    );
  }

  ngOnInit(): void {
    this.editoriales = this.heroAddService.getEditorial();
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    this.heroAddService.postFile(this.fileToUpload).subscribe(
      data => {
        // do something, if upload success
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  loadImages() {
    this.cargaImagenesSrv.loadImagenesFirebase(this.archivos);
  }

  pruebaSobreElemento(event) {
    console.log(event);
  }
  cleanFiles() {
    console.log('limpiar Archivos');
    this.archivos = [];
  }
}

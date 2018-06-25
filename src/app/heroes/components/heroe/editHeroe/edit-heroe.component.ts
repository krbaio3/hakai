import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditHeroeService } from './edit-heroe.service';
import { Heroe } from '../../../models/heroe.model';
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
    img: null,
  };

  editoriales: Editorial[];
  id: string;
  imageOlder: string = '';
  habilitarInputFile: boolean = false;
  selectedFile: File;

  constructor(
    private route: ActivatedRoute,
    private editHeroeService: EditHeroeService,
    private router: Router
  ) {
    this.route.params.subscribe(params => {
      console.log(
        `entra en editar con parametros: ${JSON.stringify(params, null, 4)}`
      );
      this.id = params['id'];
      this.editHeroeService
        .getHeroeAngularFire(this.id)
        // .getDataHeroe(this.id)
        // .then(doc => {
        //   if (doc.exists) {
        //     // console.log('Document data:', doc.data()) ;
        //     this.heroe = doc.data();
        //     this.imageOlder = this.heroe.img;
        //   } else {
        //     // doc.data() will be undefined in this case
        //     console.warn('No such document!');
        //   }
        // })
        // .catch(error => {
        //   console.error('Error getting document:', error);
        // });
        .subscribe(heroe => {
          console.log(heroe);
          this.heroe = heroe;
          if (this.imageOlder === '') {
            this.imageOlder = this.heroe.img;
          }
        });
    });
  }

  ngOnInit(): void {
    this.editoriales = this.editHeroeService.getEditorial();
  }

  onEdit() {
    console.log(`Valor: ${JSON.stringify(this.heroe, null, 4)}`);
    let equals = false;

    this.habilitarInputFile
      ? this.selectedFile.name !== this.imageOlder
        ? Object.assign(this.heroe, {
            img: this.selectedFile.name
          })
        : (equals = true)
      : (equals = true);

    this.editHeroeService
      .updateHeroe(this.heroe, this.id)
      .then(response => {
        console.log('ha ido bien');
        if (!equals && this.imageOlder !== '') {
          this.editHeroeService
            .deleteFileStorage(this.imageOlder)
            .then(() => console.log(`Se ha borrado ${name}`))
            .catch(error => {
              console.error(`Error: ${error}`);
            });
          this.upload();
        } else if (this.imageOlder === '') {
          this.upload();
        }
        this.clear();
      })
      .catch(error => console.log('ha ido MAL', error));
    // .finally(() => console.log('Quitar loading'));

    // this.editHeroeService.actualizarHeroe(this.heroe, this.id).subscribe(
    //   data => {
    //     console.log(data);
    //     this.router.navigate(['/avenger/heroes']);
    //   },
    //   error => console.error(error)
    // );
  }

  handleFileInput(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      this.selectedFile = file;
      this.heroe.img = file.name;
      // this.heroe.img = undefined;
    } else {
      alert('invalid format!');
    }
  }

  ////////////////////////

  private reset() {
    this.heroe = null;
  }

  private upload() {
    this.editHeroeService
      .upload(this.selectedFile, this.heroe)
      .then(() => {
        console.log('Entra');
        this.router.navigate(['/avenger/heroes']);
      })
      .catch(error => {
        console.error(`Error: ${error}`);
      });
  }

  clear() {
    console.log('limpiar Archivos');
    // this.selectedFile = null;
    // this.heroe = null;
  }
}

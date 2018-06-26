import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../../service/heroes.service';
import { Heroe, Editorial, FileItem, HeroeEdit } from '../../../models';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

@Component({
  selector: 'app-edit-heroe',
  templateUrl: './edit-heroe.component.html',
  styleUrls: ['./edit-heroe.component.scss'],
  providers: [HeroesService]
})
export class EditHeroeComponent implements OnInit {
  heroe: Heroe = {
    nombre: '',
    bio: '',
    editorial: '',
    aparicion: '',
    img: null
  };

  editoriales: Editorial[];
  id: string;
  imageOlder: string = '';
  habilitarInputFile: boolean = false;
  selectedFile: File;
  ejemplo = File;

  private heroeUsersCollection: AngularFirestoreCollection<Heroe>;
  private heroeDocs: AngularFirestoreDocument;
  private currentFileUpload: FileItem;

  constructor(
    private route: ActivatedRoute,
    private editHeroeService: HeroesService,
    private router: Router,
    private afs: AngularFirestore
  ) {
    this.route.params.subscribe(params => {
      console.log(
        `entra en editar con parametros: ${JSON.stringify(params, null, 4)}`
      );
      this.id = params['id'];
      this.editHeroeService.getHeroeAngularFire(this.id).subscribe(heroe => {
        console.log(heroe);
        this.heroe = heroe;
        this.heroe.id = this.id;
        if (this.imageOlder === '') {
          this.heroe.imgURL = this.editHeroeService.downloadProfileUrl(
            this.heroe.img
          );
          this.imageOlder = this.heroe.img;
        }
      });
    });
  }

  ngOnInit(): void {
    this.editoriales = this.editHeroeService.getEditorial();
  }

  onEdit() {
    let editHero: HeroeEdit = {
      nombre: '',
      editorial: '',
      bio: '',
      img: '',
      aparicion: '',
      id: ''
    };
    let equals = false;

    Object.getOwnPropertyNames(editHero).forEach((val, idx, array) => {
      editHero[val] = this.heroe[val];
    });


    this.habilitarInputFile
      ? this.selectedFile.name !== this.imageOlder
        ? Object.assign(editHero, {
            img: this.selectedFile.name
          })
        : (equals = true)
      : (equals = true);

    this.editHeroeService
      .updateHeroe(editHero)
      .then(() => {
        console.log('ha ido bien');
        if (!equals && this.imageOlder !== '') {
          this.editHeroeService
            .deleteFileStorage(this.imageOlder)
            .then(() => this.upload())
            .catch(error => console.error(`Error: ${error}`));
        } else if (this.imageOlder === '') {
          this.upload();
        }
      })
      .catch(error => console.log(`Error: ${error}`));
  }

  handleFileInput(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      this.selectedFile = file;
      this.heroe.img = file.name;
    } else {
      alert('invalid format!');
      // event.target.files.item(0) = undefined;
    }
  }

  ////////////////////////

  private reset() {
    this.heroe = null;
  }

  // private upload() {
  //   this.editHeroeService
  //     .upload(this.selectedFile, this.heroe)
  //     .then((heroe: Heroe) => {
  //       console.log('Entra');
  //       this.heroe = heroe;
  //       this.updateHeroe();
  //       // this.router.navigate(['/avenger/heroes']);
  //     })
  //     .catch(error => {
  //       console.error(`Error: ${error}`);
  //     });
  // }

  private upload() {
    const file = this.selectedFile;
    this.selectedFile = undefined;

    this.currentFileUpload = new FileItem(file);
    this.editHeroeService
      .uploadImagenesFirebase(this.currentFileUpload)
      .then(response => {
        console.log(response);
        // if (response) {
        console.log('ha ido bien');
        this.router.navigate(['/avenger/heroes']);
        // }
      })
      .catch(error => console.log('ha ido MAL', error));
  }

  private updateHeroe() {
    this.editHeroeService
      .updateHeroe(this.heroe)
      .then(response => {
        console.log('ha ido bien');
        this.router.navigate(['/avenger/heroes']);
      })
      .catch(error => console.log('ha ido MAL', error));
  }
}

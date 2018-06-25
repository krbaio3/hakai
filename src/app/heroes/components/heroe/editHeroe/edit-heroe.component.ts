import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../../service/heroes.service';
import { Heroe, Editorial, FileItem } from '../../../models';
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
          this.heroe.id = this.id;
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

    // this.upload();
    this.heroeDocs = this.afs.doc(`img/${this.heroe.id}`);
    this.heroeDocs
      .update(this.heroe)
      .then(() => {
        console.log('ha ido bien');
        if (!equals && this.imageOlder !== '') {
          this.editHeroeService.deleteFileStorage(this.imageOlder);
          this.upload();
        } else if (this.imageOlder === '') {
          this.upload();
        }
        this.clearState();
      })
      .catch(error => console.log('ha ido MAL'));
    // if (!equals && this.imageOlder !== '') {
    //   this.editHeroeService
    //     .deleteFileStorage(this.heroe)
    //     .then(name => {
    //       console.log(`Se ha borrado ${name}`);
    //       this.upload();
    //     })
    //     .catch(error => {
    //       console.error(`Error: ${error}`);
    //     });
    // } else if (this.imageOlder === '') {
    //   this.upload();
    // } else {
    //   console.log('Nos vamos al listado de heroes');
    //   this.router.navigate(['/avenger/heroes']);
    // }

    // this.updateHeroe();
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
    this.editHeroeService.uploadImagenesFirebaseEdit(this.heroe, this.currentFileUpload);
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

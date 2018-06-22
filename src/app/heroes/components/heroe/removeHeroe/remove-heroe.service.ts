import { Injectable } from '@angular/core';
import { Heroe } from '../../../models/heroe.model';
import {
  AngularFirestoreDocument,
  AngularFirestore
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({ providedIn: 'root' })
export class RemoveHeroeService {
  private basePath = 'img';
  private heroeDoc: AngularFirestoreDocument<Heroe>;
  private heroe: Observable<Heroe>;

  constructor(
    private afs: AngularFirestore  ) {}

  getHeroeAngularFire(id: string): Observable<Heroe> {
    this.heroeDoc = this.afs.doc<Heroe>(`img/${id}`);
    this.heroe = this.heroeDoc.valueChanges();
    console.log(this.heroe);
    return this.heroe;
  }

  getEditorial() {
    // crear una tabla MongoDB
    return [{ value: 'DC', code: 'dc' }, { value: 'Marvel', code: 'marvel' }];
  }

  deleteFileupload(heroe: Heroe) {
    this.deleteFileDatabase(heroe.id)
      .then(() => {
        console.log('Borrado FileDataBase');
        this.deleteFileStorage(heroe.img);
      })
      .catch(error => console.error(`ERROR: ${error}`));
  }

  /////////////////////////

  private deleteFileDatabase(key: string) {
    return this.afs.doc(`${this.basePath}/${key}`).delete();
  }

  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef
      .child(`${this.basePath}/${name}`)
      .delete()
      .then(() => console.log(`Se ha borrado ${name}`))
      .catch(error => console.error(`Error: ${JSON.stringify(error, null, 4)}`));
  }
}

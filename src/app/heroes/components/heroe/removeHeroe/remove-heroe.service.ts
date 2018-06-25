import { Injectable } from '@angular/core';
import { Heroe } from '../../../models/heroe.model';
import {
  AngularFirestoreDocument,
  AngularFirestore
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({ providedIn: 'root' })
export class RemoveHeroeService {
  private basePath = 'img';
  private heroeDoc: AngularFirestoreDocument<Heroe>;
  private heroe: Observable<Heroe>;
  private profileURL: Observable<string | null>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
    private db: AngularFireDatabase
  ) {}

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

  deleteFileupload(heroe: Heroe): Promise<any> {
    return new Promise((resolve, reject) => {
      // deleteFileupload(heroeURL: string) {
      // return firebase
      //   .storage()
      //   .refFromURL(heroeURL)
      //   .delete();

      this.deleteFileStorage(heroe.imgURL)
        .then(() => {
          console.log('Borrado FileDataBase');
          resolve(this.deleteFileDatabase(heroe.id));
        })
        .catch(error => {
          console.error(`ERROR: ${error}`);
          reject(error);
        });
    });
  }

  downloadProfileUrl(profileImg: string): Observable<string> {
    const ref = this.storage.ref(`${this.basePath}/${profileImg}`);
    this.profileURL = ref.getDownloadURL();
    return this.profileURL;
  }

  /////////////////////////

  private deleteFileDatabase(id: string) {
    return this.afs.doc(`${this.basePath}/${id}`).delete();
  }

  private deleteFileStorage(heroeURL: string) {
    return firebase
      .storage()
      .refFromURL(heroeURL)
      .delete();

    // const storageRef = firebase.storage().ref();
    // return storageRef.child(`${this.basePath}/${name}`).delete();

    // storageRef.getDownloadURL().then(downloadUrl => {
    //   console.log(downloadUrl);
    //   storageRef.child(`${downloadUrl}`).delete();
    // }).catch((error) => {
    //   console.error(`Error: ${error}`);
    // });
    // .then(() => console.log(`Se ha borrado ${name}`))
    // .catch(error =>
    //   console.error(`Error: ${JSON.stringify(error, null, 4)}`)
    // );
  }
}

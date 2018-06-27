import { Injectable } from '@angular/core';
import { Editorial } from '../models/I-Editorial';
import { Heroe } from '../models';
import { Observable } from 'rxjs';
import { FileItem } from '../models/file-item';

import {
  AngularFirestore,
  // AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private basePath = 'img';

  // private heroeCollection: AngularFirestoreCollection<Heroe>;
  private heroeDoc: AngularFirestoreDocument<Heroe>;
  private heroe: Observable<Heroe>;
  private currentFileUpload: FileItem;

  profileURL: Observable<string | null>;
  progress: { porcentaje: number } = { porcentaje: 0 };

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
    private adb: AngularFireDatabase
  ) {
    // this.heroeCollection = this.afs.collection<Heroe>('img');
  }

  getEditorial(): Editorial[] {
    // crear una tabla MongoDB
    return [{ value: 'DC', code: 'dc' }, { value: 'Marvel', code: 'marvel' }];
  }

  uploadImagenesFirebase(
    fileUpload: FileItem,
    progress: { porcentaje: number } = { porcentaje: 0 }
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {

      const storageRef = firebase.storage().ref();
      const uploadTask: firebase.storage.UploadTask = storageRef
        .child(`${this.basePath}/${fileUpload.imagen.name}`)
        .put(fileUpload.imagen);

      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) => {
          // in progress
          const snap = snapshot as firebase.storage.UploadTaskSnapshot;
          progress.porcentaje = Math.round(
            (snap.bytesTransferred / snap.totalBytes) * 100
          );
        },
        error => {
          // error fileUpload
          console.error('Error al subir el archivo: ', error);
          reject(error);
        },
        () => {
          // success
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            console.log('File available at', downloadURL);
            fileUpload.url = downloadURL;
            this.saveImg(fileUpload);
            resolve(true);
          });
        }
      );
    });
  }

  handleError(arg0: any): any {
    console.error(arg0);
    return false;
  }

  // Edit Heroe

  updateHeroe(heroe: Heroe) {
    this.heroeDoc = this.afs.doc<Heroe>(`${this.basePath}/${heroe.id}`);

    return this.heroeDoc.update(heroe);
  }

  getDataHeroe(id: string) {
    const docRef = firebase
      .firestore()
      .collection('img')
      .doc(id);

    return docRef.get();
  }

  getHeroeAngularFire(id: string): Observable<Heroe> {
    this.heroeDoc = this.afs.doc<Heroe>(`img/${id}`);
    this.heroe = this.heroeDoc.valueChanges();
    console.log(this.heroe);
    return this.heroe;
  }

  deleteFileStorage(imageOlder: string) {
    const storageRef = firebase.storage().ref();
    return storageRef.child(`${this.basePath}/${imageOlder}`).delete();
  }

  upload(file: File, heroe: Heroe) {
    this.currentFileUpload = new FileItem(file);
    return this.uploadImagenesFirebaseEdit(this.currentFileUpload);
  }

  // Fin Edit

  // Show Heroe
  // Fin Show Heroe

  // Remove Heroe
  deleteFileupload(heroe: Heroe): Promise<any> {
    return new Promise((resolve, reject) => {
      this.deleteFileDatabase(heroe.id)
        .then(() => {
          console.log('Borrado FileDataBase');
          resolve(this.deleteFileStorage(heroe.img));
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
  // Fon Remove Heroe

  ///////////////////////////////////

  private saveImg(imagen: FileItem) {
    console.log(`esta es la imagen: ${imagen}`);
    this.adb.list(`${this.basePath}/`).push(imagen);
  }

  private deleteFileDatabase(id: string) {
    return this.afs.doc(`${this.basePath}/${id}`).delete();
  }

  uploadImagenesFirebaseEdit(fileUpload: FileItem) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef
      .child(`${this.basePath}/${fileUpload.nombreImagen}`)
      .put(fileUpload.imagen);

    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      snapshot => {
        //in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        // progress.porcentaje = Math.round(
        //   (snap.bytesTransferred / snap.totalBytes) * 100
        // );
      },
      error =>
        // fail
        console.error(`ERROR in ${error}`),
      () => {
        // success
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log('File available at', downloadURL);
          fileUpload.url = downloadURL;
          // fileUpload.nombreImagen = fileUpload.imagen.name;
          this.saveFileData(fileUpload);
        });
      }
    );
  }

  private saveFileData(fileUpload: FileItem) {
    this.adb.list(`${this.basePath}/`).push(fileUpload);
  }

  //////////////////////////
  // RESIDUAL
  /////////////////////////

  searchHeroe(name: string) {
    //   const heroesArr: Heroe[] = [];
    //   name = name.toLocaleLowerCase();
    //   let count = 0;
    //   for (const heroe of this.getHeroes()) {
    //     count++;
    //     const nombre = heroe.nombre.toLocaleLowerCase();
    //     if (nombre.indexOf(name) >= 0) {
    //       const miHeroe = Object.assign(heroe, { indice: count });
    //       heroesArr.push(miHeroe);
    //     }
    //   }
    //   return heroesArr;
  }

  getHeroes(img: string): any {
    // const startsRef = this.storage.ref(`${this.basePath}/${img}`);
    // startsRef.getDownloadURL().subscribe(url => {
    //   return url;
    // });
  }
}

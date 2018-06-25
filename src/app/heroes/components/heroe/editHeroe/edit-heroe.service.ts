import { Injectable } from '@angular/core';
import { Editorial } from '../models/I-Editorial';
import { Heroe } from '../../../models/heroe.model';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { FileItem } from '../../../models/file-item';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({ providedIn: 'root' })
export class EditHeroeService {
  private basePath = 'img';
  private heroeDoc: AngularFirestoreDocument<Heroe>;
  private heroe: Observable<Heroe>;
  private currentFileUpload: FileItem;
  progress: { porcentaje: number } = { porcentaje: 0 };
  private heroeCollection: AngularFirestoreCollection<Heroe>;

  constructor(
    private afs: AngularFirestore,
    private adb: AngularFireDatabase
  ) {
    this.heroeCollection = afs.collection<Heroe>('img');
  }

  updateHeroe(heroe: Heroe) {
    this.heroeDoc = this.afs.doc<Heroe>(`${this.basePath}/${heroe.id}`);

    return this.heroeDoc.update(heroe);

    // .then(() => {
    //   console.log('ha ido bien');
    //   if (!equals && this.imageOlder !== '') {
    //     this.uploadService.deleteFileStorage(this.imageOlder);
    //     this.upload();
    //   } else if (this.imageOlder === '') {
    //     this.upload();
    //   }
    //   this.clearState();
    // })
    // .catch(error => console.log('ha ido MAL'));
  }

  getDataHeroe(id: string) {
    const docRef = firebase
      .firestore()
      .collection('img')
      .doc(id);

    return docRef
      .get();
      // .then((doc) => {
      //   doc.exists ? console.log('Document data:', doc.data()) :
      //     // doc.data() will be undefined in this case
      //     console.warn('No such document!');
      // })
      // .catch((error) => {
      //   console.error('Error getting document:', error);
      // });
  }

  getHeroeAngularFire(id: string): Observable<Heroe> {
    this.heroeDoc = this.afs.doc<Heroe>(`img/${id}`);
    this.heroe = this.heroeDoc.valueChanges();
    console.log(this.heroe);
    return this.heroe;
  }

  getEditorial(): Editorial[] {
    // crear una tabla MongoDB
    return [{ value: 'DC', code: 'dc' }, { value: 'Marvel', code: 'marvel' }];
  }

  deleteFileStorage(heroe: Heroe) {
    return firebase
      .storage()
      .refFromURL(heroe.imgURL)
      .delete();
  }

  upload(file: File, heroe: Heroe) {
    this.currentFileUpload = new FileItem(file);
    return this.uploadImagenesFirebase(heroe, this.currentFileUpload, this.progress);
  }

  ///////////////////////////////////

  private saveImg(imagen: FileItem) {
    console.log(`esta es la imagen: ${imagen}`);
    this.adb.list(`${this.basePath}/`).push(imagen);
  }

  private uploadImagenesFirebase(
    heroe: Heroe,
    fileUpload: FileItem,
    progress: { porcentaje: number }
  ): Promise<DocumentReference> {
    return new Promise((resolve, reject) => {
      console.log(fileUpload);

      const storageRef = firebase.storage().ref();
      const uploadTask: firebase.storage.UploadTask = storageRef
        .child(`${this.basePath}/ ${fileUpload.imagen.name}`)
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
            heroe.imgURL = downloadURL;
            heroe.img = fileUpload.imagen.name;
            fileUpload.url = downloadURL;
            fileUpload.nombreImagen = fileUpload.imagen.name;
            this.saveImg(fileUpload);
            resolve(this.heroeCollection.add(heroe));
          });
        }
      );
    });
  }
}

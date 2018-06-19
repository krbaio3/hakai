import { Injectable } from '@angular/core';
import { Editorial } from '../models/I-Editorial';
import { CONSTANTES } from '../heroe.constans';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../models/I-AddHeroe';
import { Observable } from 'rxjs';
import { FileItem } from '../../../models/file-item';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference
} from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class AddHeroeService {
  private CARPETA_IMAGENES = 'img';
  private heroeCollection: AngularFirestoreCollection<Heroe>;

  profileURL: Observable<string | null>;
  heroeURL = CONSTANTES.heroesURL;
  headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: Http,
    private afs: AngularFirestore,
    private adb: AngularFireDatabase,
  ) {
    this.heroeCollection = this.afs.collection<Heroe>('img');
  }

  uploadImagenesFirebase(
    heroe: Heroe,
    fileUpload: FileItem,
    progress: { porcentaje: number }
  ): Promise<DocumentReference> {
    return new Promise((resolve, reject) => {

      console.log(fileUpload);

      const storageRef = firebase.storage().ref();
      const uploadTask: firebase.storage.UploadTask = storageRef
        .child(`${this.CARPETA_IMAGENES}/ ${fileUpload.imagen.name}`)
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

  getEditorial(): Editorial[] {
    // crear una tabla MongoDB
    return [{ value: 'DC', code: 'dc' }, { value: 'Marvel', code: 'marvel' }];
  }

  postFile(fileToUpload: File): Observable<any> {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData, { headers: this.headers });
    // .map(() => true)
    // .catch(e => this.handleError(e));
  }


  handleError(arg0: any): any {
    console.error(arg0);
    return false;
  }

  ///////////////////////////////////

  private saveImg(imagen: FileItem) {
    console.log(`esta es la imagen: ${imagen}`);
    this.adb.list(`${this.CARPETA_IMAGENES}/`).push(imagen);
  }
}

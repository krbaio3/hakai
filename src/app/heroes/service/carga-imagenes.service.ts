import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

import { FileItem } from '../models/file-item';

@Injectable()
export class CargaImagenesService {
  private CARPETA_IMAGENES = 'img';

  constructor(private db: AngularFirestore) {}

  loadImagenesFirebase(imagenes: FileItem[]) {
    console.log(imagenes);

    // const storage = firebase.storageRef();
    const storage = firebase.storage().ref();
    for (const item of imagenes) {
      item.estaSubiendo = true;
      if (item.progreso >= 100) {
        continue;
      }
      const uploadTask: firebase.storage.UploadTask = storage
        .child(`${this.CARPETA_IMAGENES}/ ${item.nombreArchivo}`)
        .put(item.archivo);
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) =>
          (item.progreso =
            snapshot.bytesTransferred / snapshot.totalBytes * 100),
        error => console.error('Error al subir el archivo: ', error),
        () => {
          console.log('Imagen cargada correctamente');
          item.url = uploadTask.snapshot.downloadURL;
          this.saveImg({
            nombre: item.nombreArchivo,
            url: item.url
          });
        }
      );
    }
  }

  private saveImg(imagen: { nombre: string; url: string }) {
    this.db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);
  }
}

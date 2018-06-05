import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

import { FileItem } from '../models/file-item';

interface ImagenUploaded {
  nombre: string;
  url: string;
}

@Injectable()
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';
  private img: ImagenUploaded;

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
          console.log(uploadTask.snapshot.metadata.fullPath);
          console.log('Imagen cargada correctamente');
          item.url = uploadTask.snapshot.downloadURL;
          this.img = {
            nombre: item.nombreArchivo,
            url: item.url
          };
          this.saveImg( this.img);
        }
      );
    }
    return this.img;
  }

  private saveImg(imagen: ImagenUploaded) {
    this.db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);
  }
}

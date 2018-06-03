import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

import { FileItem } from '../models/file-item';

@Injectable()
export class CargaImagenesService {
  private CARPETA_IMAGENES = 'img';

  constructor(private db: AngularFirestore) {}

  loadImagenesFirebase( imagenes: FileItem[]) {
    console.log(imagenes);
  }

  private saveImg(imagen: { nombre: string; url: string }) {
    this.db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);
  }
}

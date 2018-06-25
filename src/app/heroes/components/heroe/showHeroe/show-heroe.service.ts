import { Injectable } from '@angular/core';
import { Editorial } from '../models/I-Editorial';
import { Heroe } from '../models/I-AddHeroe';
import {
  AngularFirestoreDocument,
  AngularFirestoreCollection,
  AngularFirestore
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { FileItem } from '../../../models/file-item';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({ providedIn: 'root' })
export class ShowHeroeService {
  private heroeDoc: AngularFirestoreDocument<Heroe>;
  private heroe: Observable<Heroe>;
  progress: { porcentaje: number } = { porcentaje: 0 };

  constructor(
    private afs: AngularFirestore  ) {}

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
}

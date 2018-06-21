import { Injectable } from '@angular/core';
import { Editorial } from '../models/I-Editorial';
import { CONSTANTES } from '../heroe.constans';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../models/I-AddHeroe';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
// import { Utils } from '../utils';

@Injectable({ providedIn: 'root' })
export class EditHeroeService {
  heroeURL = CONSTANTES.heroeURL;

  headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });

  private itemDoc: AngularFirestoreDocument<Heroe>;
  item: Observable<Heroe>;

  constructor(private http: Http, private afs: AngularFirestore) {}

  actualizarHeroe(heroe: Heroe, key$: string) {
    const body = JSON.stringify(heroe);
    const headers = this.headers;
    const url = `${this.heroeURL}/${key$}.json`;

    // return this.http.put(url, body, { headers }).map(response => {
    //   console.log(response.json());
    //   return response.json();
    // });
  }

  getHeroe(key$: string) {
    const url = `${this.heroeURL}/${key$}.json`;

    // return this.http.get(url).map(response => {
    //   console.log(response.json());
    //   return response.json();
    // });
  }

  getDataHeroe(id: string) {
    const docRef = firebase
      .firestore()
      .collection('img')
      .doc(id);

    docRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          console.log('Document data:', doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch(function(error) {
        console.log('Error getting document:', error);
      });
  }

  getHeroeAngularFire(id: string): Observable<Heroe> {
    this.itemDoc = this.afs.doc<Heroe>(`img/${id}`);
    this.item = this.itemDoc.valueChanges();
    console.log(this.item);
    return this.item;
  }

  getEditorial(): Editorial[] {
    // crear una tabla MongoDB
    return [{ value: 'DC', code: 'dc' }, { value: 'Marvel', code: 'marvel' }];
  }
}

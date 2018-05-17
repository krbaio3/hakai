// import { Injectable } from '@angular/core';
// import {
//   AngularFirestore,
//   AngularFirestoreCollection,
//   AngularFirestoreDocument
// } from 'angularfire2/firestore';

// import { Heroe } from '../../models/heroe.model';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';

// @Injectable()
// export class HeroesService {
//   // private heroes: Heroe[];
//   heroes: Observable<Heroe[]>;
//   heroeCollection: AngularFirestoreCollection<Heroe>;
//   heroeDoc: AngularFirestoreDocument<Heroe>;

//   constructor(public angularFirestore: AngularFirestore) {
//     console.log('entra en HeroeService');
//     this.heroeCollection = angularFirestore.collection('heroes');
//     this.heroes = this.heroeCollection.snapshotChanges().map(changes => {
//       return changes.map(a => {
//         const data = a.payload.doc.data() as Heroe;
//         // const id = a.payload.doc.id;
//         // return { id, ...data };
//         return data;
//       });
//     });
//     // console.log(`Esto es this.heroes: ${this.asyncPipe.transform(this.heroes)}`);
//   }

//   getHeroes() {
//     return this.heroes;
//   }

//   addHeroe(heroe: Heroe) {
//     this.heroeCollection.add(heroe);
//   }

//   deleteHeroe(heroe: Heroe) {
//     this.heroeDoc = this.angularFirestore.doc(`tasks/${heroe.id}`);
//     this.heroeDoc.delete();
//   }

//   updateHeroe(heroe: Heroe) {
//     this.heroeDoc = this.angularFirestore.doc(`tasks/${heroe.id}`);
//     this.heroeDoc.update(heroe);
//   }

//   getHeroe(ind: number): Observable<Heroe> {
//     this.heroes.subscribe(res => console.log('respuesta', res));
//     // console.log(this.heroes);
//     // return this.heroes[ind];
//     return Observable.of(this.heroes[ind]);
//   }

//   // searchHeroes(name: string): Heroe[] {
//   //   const heroesArr: Heroe[] = [];
//   //   name = name.toLocaleLowerCase();
//   //   let count = 0;
//   //   for (const heroe of this.getHeroes()) {
//   //     count++;
//   //     const nombre = heroe.nombre.toLocaleLowerCase();
//   //     if (nombre.indexOf(name) >= 0) {
//   //       const miHeroe = Object.assign(heroe, { indice: count });
//   //       heroesArr.push(miHeroe);
//   //     }
//   //   }
//   //   return heroesArr;
//   // }
//   searchHeroes(name: string) {
//     console.log(name);
//   }
// }

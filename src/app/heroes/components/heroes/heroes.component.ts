import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowHeroesService } from './show-heroes.service';
import { Heroe } from '../../models/heroe.model';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [ShowHeroesService]
})
export class HeroesComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Heroe>;
  heroes: Observable<Heroe[]>;

  // heroes;
  // heroes: any[] = [];

  constructor(
    private _showHeroeSrv: ShowHeroesService,
    private router: Router,
    private route: ActivatedRoute,
    private readonly afs: AngularFirestore
  ) {
    console.log('constructor Heroes');
    // this._showHeroeSrv.getHeroes().subscribe(
    //   data => {
    //     console.log(data);
    //     this.heroes = data;
    //   },
    //   error => console.error(error)
    // );
    this.itemsCollection = afs.collection<Heroe>('img');
    // .valueChanges() is simple. It just returns the
    // JSON data without metadata. If you need the
    // doc.id() in the value you must persist it your self
    // or use .snapshotChanges() instead. See the addItem()
    // method below for how to persist the id with
    // valueChanges()
    this.heroes = this.itemsCollection.valueChanges();
  }

  ngOnInit() {
    console.log('ngOninit');
  }

  verHeroe(indice: number) {
    console.log(indice);
    this.router.navigate(['../heroe', indice], { relativeTo: this.route });
  }

  goToEdit(indice: string) {
    console.log('editar');
    console.log(`indice ${indice}`);
  }

  gotToRemove(indice: string) {
    console.log('eliminar');
    console.log(`indice ${indice}`);
  }
}

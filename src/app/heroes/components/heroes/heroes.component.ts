import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HeroesService } from '../../service/heroes.service';
import { Heroe } from '../../models';
import { AuthService } from '../../service/auth.service';
import { LoadingService } from '../../../core/loading/loading.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  providers: [HeroesService]
})
export class HeroesComponent implements OnInit {
  private heroesCollection: AngularFirestoreCollection<Heroe>;
  heroes: Observable<Heroe[]>;
  loading: boolean;

  // heroes;
  // heroes: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private readonly afs: AngularFirestore,
    private showHeroeSrv: HeroesService,
    private authSrv: AuthService,
    private loaderService: LoadingService
  ) {
    console.log('constructor Heroes');
    if (this.authSrv.isLoggedIn()) {
      this.heroesCollection = this.afs.collection<Heroe>('img');
      // .valueChanges() is simple. It just returns the
      // JSON data without metadata. If you need the
      // doc.id() in the value you must persist it your self
      // or use .snapshotChanges() instead. See the addItem()
      // method below for how to persist the id with
      // valueChanges()
      // this.heroes = this.heroesCollection.valueChanges();
      this.heroes = this.heroesCollection.snapshotChanges().pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as Heroe;
            // Si tiene el atributo img con el nombre, se busca y se descarga la imagen.
            //if (data.img) { data.imgURL = this.showHeroeSrv.downloadProfileUrl(data.img); }
            data.imgURL = this.showHeroeSrv.downloadProfileUrl(data.img);
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
    } else {
      console.error('ERROR');
    }
  }

  ngOnInit() {
    console.log('ngOninit');
    this.loaderService.status.subscribe((val: boolean) => {
      this.loading = val;
    });
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

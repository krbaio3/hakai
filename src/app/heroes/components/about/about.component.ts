import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [HeroesService]
})
export class AboutComponent implements OnInit {

  items: Observable<any[]>;

  constructor(private angularFirestore: AngularFirestore) {
    console.log('entra');
    this.items = angularFirestore.collection('heroes').valueChanges();
    console.log(this.items);
  }

  ngOnInit() {
  }

}

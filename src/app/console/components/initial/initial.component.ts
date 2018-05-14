import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { INCREMENT, DECREMENT } from '../../reducers/counter.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent {
  counter: number;

  constructor(private store: Store<number>) {
    this.counter = 0;
    store.subscribe(
      nextValue => {
        const extract = nextValue as any;
        this.counter = extract.counter;
        console.log(nextValue);
      },
      err => console.error(err),
      () => console.log('done')
    );
  }

  increment() {
    // this.counter++;
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    // this.counter--;
    this.store.dispatch({ type: DECREMENT });
  }
}

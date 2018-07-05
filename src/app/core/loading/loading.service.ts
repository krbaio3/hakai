import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class LoadingService {
  public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  display(value: boolean) {
    this.status.next(value);
  }
}

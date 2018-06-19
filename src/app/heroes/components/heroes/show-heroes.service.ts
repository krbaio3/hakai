import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFireStorage } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class ShowHeroesService {
  private CARPETA_IMAGENES = 'img';

  profileURL: Observable<string | null>;

  constructor(private storage: AngularFireStorage) {}

  downloadProfileUrl(profileImg: string): Observable<string> {
    const ref = this.storage.ref(`${this.CARPETA_IMAGENES}/${profileImg}`);
    this.profileURL = ref.getDownloadURL();
    return this.profileURL;
  }

  ///////////////////////////////////
}

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

  downloadProfileUrl(profileImg: string): any {
    // const ref = this.storage.ref(`${this.CARPETA_IMAGENES}/${profileImg}`);
    // this.profileURL = ref.getDownloadURL();

    const startsRef = this.storage.ref(
      `${this.CARPETA_IMAGENES}/${profileImg}`
    );

    startsRef.getDownloadURL().subscribe(url => {
        return url;
      // switch (error.code) {
      // case 'storage/object_not_found':
      // File doesn't exist
      // break;

      // case 'storage/unauthorized':
      // User doesn't have permission to access the object
      // break;

      // case 'storage/canceled':
      // User canceled the upload
      // break;

      // case 'storage/unknown':
      // Unknown error occurred, inspect the server response
      // break;
      //   }
    });
  }

  ///////////////////////////////////
}

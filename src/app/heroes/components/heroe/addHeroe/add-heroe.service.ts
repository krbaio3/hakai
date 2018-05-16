import { Injectable } from '@angular/core';
import { Editorial } from '../models/I-Editorial';
import { CONSTANTES } from '../heroe.constans';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../models/I-AddHeroe';
import { Observable } from 'rxjs/Observable';
// import { Utils } from '../utils';

@Injectable()
export class AddHeroeService {
  heroeURL = CONSTANTES.heroesURL;

  headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http) {}

  nuevoHeroe(heroe: Heroe) {
    const body = JSON.stringify(heroe);
    const headers = this.headers;

    return this.http.post(this.heroeURL, body, { headers }).map(response => {
      console.log(response.json());
      return response.json();
    });
  }

  getEditorial(): Editorial[] {
    // crear una tabla MongoDB
    return [{ value: 'DC', code: 'dc' }, { value: 'Marvel', code: 'marvel' }];
  }

  postFile(fileToUpload: File): Observable<any> {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http
      .post(endpoint, formData, { headers: this.headers })
      .map(() => true)
      .catch(e => this.handleError(e));
  }

  handleError(arg0: any): any {
    console.error(arg0);
    return false;
  }
}

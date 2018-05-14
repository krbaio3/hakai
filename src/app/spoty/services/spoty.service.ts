import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotyService {
  artistas: any[] = [];

  tracks: any[] = [];

  urlSpotyfy = 'https://api.spotify.com/v1/';

  token = 'BQBB257FDHEivhOBbVtRVyuPwY2HCYq_VuMTpNEG1GyrPXG7t0yZWFLGvjJYB9-qZDLP0HFKMP6kWUYaBf';

  country = 'US';

  cambiado = false;

  constructor(public http: HttpClient) {
    console.log('constructor Service');
    console.log('otro log');
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      authorization: `Bearer ${this.token}`,
    });
    // return headers;
  }

  getArtistas(artista: string) {
    const url = `${
      this.urlSpotyfy
    }search?query=${artista}&type=artist&limit=20`;

    return this.http
      .get(url, { headers: this.getHeaders() })
      .map((response: any) => {
        if (response.error && response.error.error.status === '401') {
          // if (response.hasOwnProperty('error') && response.error.error.status === '401') {
          // this.getToken();
          return {
            error: true,
            msg: console.error(`Error: ${JSON.stringify(response, null, 4)}`),
          };
        }
        this.artistas = response.artists.items;
        return this.artistas;
      });
  }

  getArtista(id: string) {
    const url = `${this.urlSpotyfy}artists/${id}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  getTop(id: string) {
    const url = `${this.urlSpotyfy}artists/${id}/top-tracks?country=${
      this.country
    }`;

    return this.http
      .get(url, { headers: this.getHeaders() })
      .map((response: any) => {
        if (response.error && response.error.error.status === '401') {
          // if (response.hasOwnProperty('error') && response.error.error.status === '401') {
          // this.getToken();
          return console.error(`Error: ${JSON.stringify(response, null, 4)}`);
        }
        this.tracks = response.tracks;
        return this.tracks;
      });
  }
}

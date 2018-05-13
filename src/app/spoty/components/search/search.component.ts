import { Component, OnInit } from '@angular/core';

import { SpotyService } from '../../services/spoty.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchSpotyComponent implements OnInit {
  artista = '';
  response = undefined;

  constructor(public _spotifyService: SpotyService) {}

  buscarArtista() {

    if (this.artista.length === 0) {
      return;
    }

    this._spotifyService.getArtistas(this.artista).subscribe(response => {
      // console.log('Informacion: ', JSON.stringify(response, null, 4));
      this.response = response;
    });
  }

  ngOnInit() {
    console.log('entra');
  }
}

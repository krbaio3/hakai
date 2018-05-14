import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotyService } from '../../services/spoty.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  artista: any = [];

  tracks: any[];

  // uri

  constructor(
    private activatedRoute: ActivatedRoute,
    private _spotifySrv: SpotyService
  ) {}

  ngOnInit() {
    console.log('entra en artist component');
    this.activatedRoute.params
      //trasnforma el objeto de vuelta en lo que queremos
      .map(params => params['id'])
      .subscribe(id => {
        console.log(id);
        this._spotifySrv.getArtista(id).subscribe((artista: any) => {
          this.artista = artista;
          console.log(artista);
          console.log(`prueba ${artista.external_urls.spotify}`);
        });
        this._spotifySrv
          .getTop(id)
          // .map( (response:any) => response.tracks)
          .subscribe((tracks: any) => {
            console.log(tracks);
            this.tracks = tracks;
          });
      });
  }
}

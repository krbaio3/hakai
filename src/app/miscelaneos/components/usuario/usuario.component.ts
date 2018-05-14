import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  constructor( private router: ActivatedRoute) {
    this.router.params.subscribe( params => {
      console.log('ruta Padre');
      console.log(params);
    });
   }

  ngOnInit() {
  }

}

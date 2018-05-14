import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  nombre = 'Jorge';
  array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI = Math.PI;
  decimal = 0.234;
  sueldo = 2235.56;
  heroe = {
    nombre: 'Wolverine',
    bio:
      'Wolverine posee poderes regenerativos que pueden curar cualquier herida',
    img: 'assets/img/wolverine.png',
    aparicion: '1974-11-01',
    casa: 'Marvel',
  };
  fecha = new Date();
  nombre2 = 'JorgE CaRballo AlonSo';
  video = '0FgRZecGICU';
  activar = true;

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Llegaron los datos');
    }, 3500);
  });

  constructor() {}

  ngOnInit() {}
}

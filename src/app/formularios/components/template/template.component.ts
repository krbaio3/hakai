import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  // Se quitan los tipos porque no construye con travisgi

  usuario = {
    nombre: null,
    apellido: null,
    email: null,
    pais: '',
    gender: null,
    accept: false,
  };

  paises = [
    {
      codigo: 'ESP',
      nombre: 'España'
    },
    {
      codigo: 'AND',
      nombre: 'Andorra'
    },
    {
      codigo: 'USA',
      nombre: 'United Stated'
    }
  ];

  genders = [
    {
      value: 'm',
      name: 'Man'
    },
    {
      value: 'w',
      name: 'Women'
    },
    {
      value: 'nc',
      name: 'N/C'
    }
  ];

  constructor() { }

  guardar(forma: NgForm) {
    console.log('post');
    console.log(forma);
    console.log(`Valor: ${JSON.stringify(forma.value, null, 4)}`);
    // console.log('Usuario', this.usuario);
  }
}

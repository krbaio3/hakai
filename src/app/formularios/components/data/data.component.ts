import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { CONSTANTS } from '../../formulario.const';
import { Usuario } from '../../models/usuario';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  formulario: FormGroup;
  CONSTANTS: any;

  usuario: Usuario = {
    nombreCompleto: {
      nombre: 'Jorge',
      apellido: 'KrBaIO3',
    },
    email: 'krbaio3@gmail.com',
    hobbys: [],
  };

  constructor() {
    this.CONSTANTS = CONSTANTS;
    this.formulario = new FormGroup({
      nombreCompleto: new FormGroup({
        nombre: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          this.noApellido
        ])
      }),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
      ]),
      hobbys: new FormArray([
        new FormControl('Correr', [Validators.required])
      ]),
      username: new FormControl(
        '',
        [Validators.required],
        [this.existeUsurio]
      ),
      pass1: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      pass2: new FormControl()
    });

    // this.formulario.setValue(this.usuario);

    this.formulario.controls['pass2'].setValidators([
      Validators.required,
      Validators.minLength(5),
      // Hay que bindear el objeto this por el error de JS
      this.noIgual.bind(this.formulario),
    ]);

    // Suscritos a nivel general al formulario

    // this.formulario.valueChanges
    //   .subscribe(data => console.log(data));

    this.formulario.controls['username'].valueChanges
      .subscribe(data => console.log(data));

    this.formulario.controls['username'].statusChanges
    .subscribe(data => console.log(data));
  }

  ngOnInit() {}

  guardarCambios() {
    console.log(this.formulario.value);
  }

  getControls(frmGrp: FormGroup, key: string) {
    return (<FormArray>frmGrp.controls[key]).controls;
  }

  resetForm() {
    const usuario: Usuario = {
      nombreCompleto: {
        nombre: '',
        apellido: '',
      },
      email: '',
    };

    // this.formulario.reset(usuario);
  }

  addHobby() {
    (<FormArray>this.formulario.controls['hobbys']).push(
      new FormControl('', Validators.required),
    );
  }

  noApellido(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Apellido') {
      return {
        noApellido: true,
      };
    }
    return null;
  }

  noIgual(control: FormControl): { [s: string]: boolean } {
    // por el bind a this, en la llamada del formulario, decimos que cuando se ejecute la funcion  this es el formulario
    const formulario: any = this;
    // console.log(this);
    if (control.value !== formulario.controls['pass1'].value) {
      return {
        noiguales: true,
      };
    }
    return null;
  }

  existeUsurio(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if ( control.value === 'vankish' ) {
            resolve({existe: true});
          } else {
            resolve(null);
          }
        }, 3000);
      }
    );
    return promesa;
  }
}

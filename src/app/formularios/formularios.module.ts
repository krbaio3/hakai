import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormulariosRoutingModule } from './formularios.routing';
import { FormularioComponent } from './formulario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormulariosRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FormularioComponent,
    InicioComponent,
    TemplateComponent,
    DataComponent
  ]
})
export class FormulariosModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioComponent } from './formulario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';

const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioComponent,
    children: [
      { path: '', component: InicioComponent },
      { path: 'template', component: TemplateComponent },
      { path: 'inicio', component: InicioComponent },
      { path: 'data', component: DataComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulariosRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarDocenteComponent } from './Components/agregar-docente/agregar-docente.component';
import { DocenteComponent } from './Components/docente/docente.component';

import { EstudianteComponent } from './Components/estudiante/estudiante.component';
import { FacultadComponent } from './Components/facultad/facultad.component';

const routes: Routes = [
  {path:'Estudiante', component: EstudianteComponent},
   {path:'Docente', component: DocenteComponent},
    {path:'Facultad', component: FacultadComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

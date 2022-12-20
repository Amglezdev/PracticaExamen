import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAlumnosComponent } from './Views/list-alumnos/list-alumnos.component';
import { DetailAlumnoComponent } from './Views/detail-alumno/detail-alumno.component';
import { FormAlumnosComponent } from './Views/form-alumnos/form-alumnos.component';

const routes: Routes = [
  //Path towards ListAlumnos
  { path: '', component:ListAlumnosComponent },
  //Path towards DetailAlumno
  { path: 'detailAlumno/:id', component: DetailAlumnoComponent },
  //Path towards create alumno
  { path: 'addAlumno', component: FormAlumnosComponent },
  //Path towards EditAlumno
  { path: 'editAlumno', component: FormAlumnosComponent },
  //Path in case route is empty
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

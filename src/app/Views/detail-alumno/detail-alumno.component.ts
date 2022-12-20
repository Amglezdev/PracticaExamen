import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../Interfaces/alumno';
import { AlumnoService } from '../../Services/alumno.service';

@Component({
  selector: 'app-detail-alumno',
  templateUrl: './detail-alumno.component.html',
  styleUrls: ['./detail-alumno.component.css']
})
export class DetailAlumnoComponent implements OnInit {

  constructor(private serv:AlumnoService) { }

  deleteAlumno(alumno:Alumno){
    this.serv.deleteAlumno(alumno)
  }

  /*
  [routerLink]="['/detailAlumno/'
  */

  ngOnInit(): void {
  }

}

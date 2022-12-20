import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../Services/alumno.service';
import { Alumno } from '../../Interfaces/alumno';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit {

  listAlumno:Alumno[] = []
  selectedAlumno?:Alumno;

  constructor(private serv:AlumnoService) { }

  ngOnInit(): void {

  this.serv.getAlumnos().subscribe(alumno =>{
    this.listAlumno = alumno
  });

  }

  selectAlumno(alumno:Alumno){
    this.selectedAlumno = alumno;
  }

}

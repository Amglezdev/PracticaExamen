import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { AlumnoService } from '../../Services/alumno.service';


@Component({
  selector: 'app-form-alumnos',
  templateUrl: './form-alumnos.component.html',
  styleUrls: ['./form-alumnos.component.css'],
})
export class FormAlumnosComponent implements OnInit {
  formulario: FormGroup;

  constructor( private serv:AlumnoService) {
    this.formulario = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      apellidos:new FormControl(),
      curso: new FormControl(),
      edad: new FormControl(),
    });
  }

  ngOnInit(): void {}

  async onSubmit(){
    console.log(this.formulario.value)
    const response = await this.serv.addAlumno(this.formulario.value);
    console.log(response)
    alert('Usuario creado correctamente')
  }
}

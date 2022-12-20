import { Injectable } from '@angular/core';
import { addDoc, collectionData, getDoc, doc,Firestore, deleteDoc, } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Alumno } from '../Interfaces/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  ref = collection(this.fire, 'alumnos');


  constructor(private fire:Firestore) { }

 addAlumno(alumno:Alumno){
  addDoc(this.ref, alumno);
 }

 getAlumnos():Observable<Alumno[]>{
  return collectionData(this.ref, {idField:'id'}) as Observable<Alumno[]>;
 }

  deleteAlumno(alumno:Alumno){
    const REF = doc(this.fire, `alumno/${alumno.id}`)
    deleteDoc(REF);
  }

}

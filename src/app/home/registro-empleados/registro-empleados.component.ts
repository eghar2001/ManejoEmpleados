import { Component, OnInit, Output } from '@angular/core';
import { Empleado } from '../../app.empleado.model';
import { EventEmitter } from '@angular/core';
import { EmpleadosService } from '../../empleados.service';

@Component({
  selector: 'app-registro-empleados',
  templateUrl: './registro-empleados.component.html',
  styleUrls: ['./registro-empleados.component.css']
})
export class RegistroEmpleadosComponent implements OnInit {

  
  constructor(private misEmpleados:EmpleadosService) {

   }
   agregaEmpleado(nombre:string, apellido:string, cargo:string, sueldo:string){
     const empleado = new Empleado(nombre,apellido,cargo,parseInt(sueldo));
     this.misEmpleados.agregaEmpleado(empleado)
   }

  ngOnInit(): void {
  }

}

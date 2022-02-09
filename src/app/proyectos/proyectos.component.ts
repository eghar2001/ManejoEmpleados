import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../app.empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private rutas:Router, private misEmpleados:EmpleadosService) { }

  ngOnInit(): void {
  }
  volverHome(){
    this.rutas.navigate([''])
  }
  agregaEmpleado(nombre:string, apellido:string, cargo:string, sueldo:string){
    const empleado = new Empleado(nombre,apellido,cargo,parseInt(sueldo));
    
    this.misEmpleados.agregaEmpleado(empleado);
    this.rutas.navigate(['']);
  }

}

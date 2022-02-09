import { Injectable } from '@angular/core';
import { Empleado } from './app.empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  empleados:Empleado[] = [
    {nombre:"Nahuel",apellido:"Coronel",cargo:"Ingeniero en sistemas", sueldo:12000}    
  ];
  agregaEmpleado(emp:Empleado){
    this.empleados.push(emp)
  }
  actualizaEmpleado(indice:number,emp:Empleado){
    let empleadoActualizado = this.empleados[indice];
    empleadoActualizado.nombre = emp.nombre;
    empleadoActualizado.apellido = emp.apellido;
    empleadoActualizado.cargo = emp.cargo;
    empleadoActualizado.sueldo = emp.sueldo;
    alert(emp.apellido)
    this.empleados[indice] = empleadoActualizado
  }
  encontrarEmpleado(ind:number){
    let empleado = this.empleados[ind];
    return empleado;
  }
  eliminaEmpleado(ind:number){
    this.empleados.splice(ind,1);
  }
  constructor() {
 
   }
  
}

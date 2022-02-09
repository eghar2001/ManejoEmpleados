import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../app.empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-actualizacion',
  templateUrl: './actualizacion.component.html',
  styleUrls: ['./actualizacion.component.css']
})
export class ActualizacionComponent implements OnInit {

  constructor(private misEmpleados:EmpleadosService, private parametroRouter:ActivatedRoute,private rutas:Router) { 
    
  
  }
  indice: number;
  accion:number;
 

  ngOnInit(): void {
    this.indice = parseInt(this.parametroRouter.snapshot.params['id']);
    this.empleado = this.misEmpleados.encontrarEmpleado(this.indice);
    this.accion = parseInt(this.parametroRouter.snapshot.queryParams['accion'])
    alert(this.accion);

  }
  actualizarEmp(nombre:string,apellido:string,cargo:string,sueldo:string){
    alert(nombre)
    const emp = new Empleado(nombre,apellido,cargo,parseInt(sueldo))   
    this.misEmpleados.actualizaEmpleado(this.indice,emp)
    this.rutas.navigate(['']);  
  }
  borrarEmpleado(){
    this.misEmpleados.eliminaEmpleado(this.indice);
    this.rutas.navigate(['']);
  }
  empleado:Empleado;
  
  
}

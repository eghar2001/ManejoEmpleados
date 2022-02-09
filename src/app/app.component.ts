import { Component } from '@angular/core';
import { Empleado } from './app.empleado.model';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})
export class AppComponent {

  constructor(private misEmpleados:EmpleadosService){

  }
  empleados = this.misEmpleados.empleados;

  
}

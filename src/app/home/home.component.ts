import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Listado de empleados anashei';
  
  constructor(private misEmpleados:EmpleadosService){

  }
  empleados = this.misEmpleados.empleados;

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {

  constructor() { }
  caracteristicas:string[]=[];
  agregaCaracteristica(carac:string){
    this.caracteristicas.push(carac);
  }
  ngOnInit(): void {
  }

}

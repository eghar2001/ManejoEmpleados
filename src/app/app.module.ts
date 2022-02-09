import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosService } from './empleados.service';
import { RegistroEmpleadosComponent } from './home/registro-empleados/registro-empleados.component';
import { CaracteristicasEmpleadoComponent } from './home/caracteristicas-empleado/caracteristicas-empleado.component';
import { HomeComponent } from './home/home.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizacionComponent } from './actualizacion/actualizacion.component';
import { CartelErrorComponent } from './cartel-error/cartel-error.component';

const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'proyectos',component:ProyectosComponent},
  {path:'quienes',component:QuienesComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'actualizacion/:id',component:ActualizacionComponent},
  {path:'**',component:CartelErrorComponent}
]
@NgModule({
  declarations: [
    AppComponent, RegistroEmpleadosComponent, CaracteristicasEmpleadoComponent,HomeComponent, QuienesComponent, ProyectosComponent, ContactoComponent, ActualizacionComponent, CartelErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

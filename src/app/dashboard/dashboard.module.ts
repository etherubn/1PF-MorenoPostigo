import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AlumnosModule } from '../alumnos/alumnos.module';
import { AbmAlumnosComponent } from '../abm-alumnos/abm-alumnos.component';
import { AbmAlumnosModule } from '../abm-alumnos/abm-alumnos.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlumnosModule,
    AbmAlumnosModule
  ],
  exports:[
    DashboardComponent
  ],
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmAlumnosComponent } from './abm-alumnos.component';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    AbmAlumnosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AbmAlumnosComponent
  ]
})
export class AbmAlumnosModule { }

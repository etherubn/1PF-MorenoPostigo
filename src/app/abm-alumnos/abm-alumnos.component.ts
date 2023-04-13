import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.scss']
})
export class AbmAlumnosComponent {
  nombreControl = new FormControl("",[Validators.required,Validators.minLength(4)])
  apellidoControl = new FormControl("",[Validators.required,Validators.minLength(4)])
  emailControl = new FormControl('', [Validators.required, Validators.email])
  fechaNacimientoControl = new FormControl("",[Validators.required,Validators.pattern(/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/)])
  seccionControl = new FormControl("",[this.noSelected()])
  notaControl= new FormControl("",[Validators.required,Validators.min(0),Validators.max(20)])
  formulario:FormGroup

  

  constructor(public formBuilder:FormBuilder, private dialogRef:MatDialogRef<AbmAlumnosComponent>){
    this.formulario = formBuilder.group({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email:this.emailControl,
      fechaNacimiento: this.fechaNacimientoControl,
      seccion: this.seccionControl,
      nota: this.notaControl
    })
  }

  noSelected():ValidatorFn{
    return (control:AbstractControl):ValidationErrors|null =>{
      if (control.value==="") {
        return {
          noSelect: true
        }
      }
      return null
    }
  }

  guardar(){
    if (this.formulario.valid) {
      this.dialogRef.close(this.formulario.value)
    }else{
      this.formulario.markAllAsTouched
    }
  }
}

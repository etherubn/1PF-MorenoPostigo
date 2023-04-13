import { Component, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AbmAlumnosComponent } from '../abm-alumnos/abm-alumnos.component';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from '../interfaces/alumno.interface';



@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent {
  alumnos: Alumno[] = [
    {
      id: 1,
      nombre: 'Ruben Antonio',
      apellido: 'Moreno Postigo',
      email: 'moreno@gmail.com',
      fechaNacimiento: new Date(1998, 4, 23).toLocaleDateString(),
      seccion: 'A',
      nota: 16,
    },
    {
      id: 2,
      nombre: 'Jose Manuel',
      apellido: 'Raggio Bend',
      email: 'ebend@gmail.com',
      fechaNacimiento: new Date(1996, 9, 8).toLocaleDateString(),
      seccion: 'B',
      nota: 18,
    },
    {
      id: 3,
      nombre: 'Raquel Manuela',
      apellido: 'Morales Rosario',
      email: 'raqmor@hotmail.com',
      fechaNacimiento: new Date(2000, 10, 15).toLocaleDateString(),
      seccion: 'C',
      nota: 10,
    }
  ];

  dataSource = new MatTableDataSource(this.alumnos);

  displayedColumns: string[] = [
    'id',
    'nombreCompleto',
    'email',
    'fechaNacimiento',
    'seccion',
    'nota',
    'editar',
    'eliminar',
  ];

  constructor(private matDialog: MatDialog) {}
  abrirABMAlumnos() {
    const dialog = this.matDialog.open(AbmAlumnosComponent);
    dialog.afterClosed().subscribe((valor: Alumno) => {
      if (valor) {
        if (!this.existeUsuario(valor)) {
          this.dataSource.data = [
            ...this.dataSource.data,
            { ...valor, id: this.dataSource.data.length + 1 },
          ];
        }
      }
    });
  }

  existeUsuario(valor: Alumno): boolean {
    const elemento = this.alumnos.find(
      (alumno) =>
        alumno.nombre.toLocaleLowerCase() ===
          valor.nombre.toLocaleLowerCase() &&
        alumno.apellido.toLocaleLowerCase() ===
          valor.apellido.toLocaleLowerCase()
    );
    if (elemento) {
      return true;
    }
    return false;
  }

  eliminarAlumno(id:number) {
    this.dataSource.data = this.dataSource.data.filter(
      (elemento) => elemento.id !==  id
    );
    this.dataSource.data = [...this.dataSource.data]
    console.log(this.dataSource.data)
  }

  editarAlumno(i: number) {
    const dialog = this.matDialog.open(AbmAlumnosComponent);
    dialog.afterClosed().subscribe((valor: Alumno) => {
      if (valor) {
        this.dataSource.data=[...this.dataSource.data]
        this.dataSource.data[i] = {
          id:i+1,
          nombre: valor.nombre,
          apellido: valor.apellido,
          email: valor.email,
          fechaNacimiento: valor.fechaNacimiento,
          seccion: valor.seccion,
          nota: valor.nota,
        };
        this.dataSource.data=[...this.dataSource.data]
      }
    });
  }
}

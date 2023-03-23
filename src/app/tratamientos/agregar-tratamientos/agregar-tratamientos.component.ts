import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiciosOdontologiaService } from 'src/app/service/servicios-odontologia.service';
import TratamientosInterfaz from 'src/app/interfaces/tratamientos.inteface';

@Component({
  selector: 'app-agregar-tratamientos',
  templateUrl: './agregar-tratamientos.component.html',
  styleUrls: ['./agregar-tratamientos.component.css']
})
export class AgregarTratamientosComponent implements OnInit{
  formulario: FormGroup;
  formularioEliminar: FormGroup;

  constructor(
    private tratamientoService:ServiciosOdontologiaService
    
  ) {
    this.formulario = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      image: new FormControl()
    }),
    this.formularioEliminar = new FormGroup({
      name: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.tratamientoService.addTratamiento(this.formulario.value);
    console.log(response);
  }

  async onClickDelete() {
    const nombre = this.formularioEliminar.value.name;
    const response = await this.tratamientoService.deleteTratamiento(nombre);
    console.log(nombre);
    console.log(response);
  }

}




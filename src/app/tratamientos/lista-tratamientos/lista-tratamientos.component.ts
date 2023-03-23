import { Component, OnInit } from '@angular/core';
import TratamientosInterfaz from 'src/app/interfaces/tratamientos.inteface';
import { ServiciosOdontologiaService } from 'src/app/service/servicios-odontologia.service';
@Component({
  selector: 'app-lista-tratamientos',
  templateUrl: './lista-tratamientos.component.html',
  styleUrls: ['./lista-tratamientos.component.css']
})
export class ListaTratamientosComponent implements OnInit{
  tratamientos: TratamientosInterfaz[];

  constructor(
    private tratamientoService:ServiciosOdontologiaService
  ) {
    this.tratamientos = [{
      name: 'Prueba de sitio',
      description: 'Esto es una prueba',
      image: 'https://media.timeout.com/images/105718969/750/422/image.jpg'
    }];
  }

  ngOnInit(): void {
    this.tratamientoService.getTratamiento().subscribe(tratamientos => {
      this.tratamientos = tratamientos;
    })
  }
  /*async onClickDelete(tratamient: TratamientosInterfaz) {
    const response = await this.tratamientoService.deleteTratamiento(tratamient);
    console.log(response);
  }*/




}

  




  

  
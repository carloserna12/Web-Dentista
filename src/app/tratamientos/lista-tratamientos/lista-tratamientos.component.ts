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
  p: number = 1;

  constructor(
    private tratamientoService:ServiciosOdontologiaService
  ) {
    this.tratamientos = [{
      name: "",
      description:"",
      image:""
    }];
  }

  ngOnInit(): void {
    this.tratamientoService.getTratamiento().subscribe(tratamientos => {
      this.tratamientos = tratamientos;
    })
  }
  




}

  




  

  
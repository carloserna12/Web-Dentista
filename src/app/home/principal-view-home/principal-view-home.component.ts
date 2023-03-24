import { Component, OnInit } from '@angular/core';
import TratamientosInterfaz from 'src/app/interfaces/tratamientos.inteface';
import { ServiciosOdontologiaService } from 'src/app/service/servicios-odontologia.service';

@Component({
  selector: 'app-principal-view-home',
  templateUrl: './principal-view-home.component.html',
  styleUrls: ['./principal-view-home.component.css']
})
export class PrincipalViewHomeComponent implements OnInit{
  tratamientos: TratamientosInterfaz[];
  p: number = 1;
  selectedTratamientos: any[]= [];
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
      this.selectedTratamientos = [
        this.tratamientos[1],
        this.tratamientos[2],
        this.tratamientos[3],
        this.tratamientos[4],
        
      ];
    });
  }



}
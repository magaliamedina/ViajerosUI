import { Component, Input, OnInit } from '@angular/core';
import {  NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { SwitchService } from '../services/switch.service';
import { ViajesService } from '../services/viajes.service';
import { peticionViaje } from '../interfaces/viajes.interface';


@Component({
  selector: 'app-nuevo-modal',
  templateUrl: './nuevo-modal.component.html',
  styleUrls: ['./nuevo-modal.component.scss']
})
export class NuevoModalComponent implements OnInit {

  viaje: peticionViaje = {
    viajero: {
      id:    0   ,      
      nombreYApellido: ""
  },
  ciudadID:            0,
  vehiculo: {
      id:              0,
      tipoVehiculoID:  0,
      tipoVehiculo: {
          id:          0,
          descripcion: "",
      },
      patente:         "",
      marca:           "",
  },
  fecha:               null,
  cantidadDias:        0
  };

  constructor(
    private modalSS: SwitchService, 
    private viajeService: ViajesService,
    private router: Router
   ) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalSS.$modal.emit(false);
  }

  //add viaje
  submit({value: formData}: NgForm){
   console.log()
    //if(this.createViajeForm.valid) {
      this.viajeService.AddViaje(this.viaje).subscribe({
        //next (paso exitoso)
        next: viaje => this.insertadoCorrectamente(),
        //this.router.navigate(['/']),
        //nombre | (nombre) | () => { line1; line2 }
        //error (paso erroneo)
        error: error => console.log(error),
        //complete (paso sí o sí)
        complete: () => console.log("complete")
      });
  }

  insertadoCorrectamente(){
    alert("Vieje insertado correctamente");
    this.closeModal();
     this.router.navigate(['/']);
  }

}

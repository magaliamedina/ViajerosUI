import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { SwitchService } from './services/switch.service';
import { ViajesService } from './services/viajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'viajerosUI';
  modalSwitch:boolean;
  viajes: any;

  constructor(private modalSS:SwitchService, private viajesService: ViajesService){
  }

  openModal(){
    this.modalSwitch=true;    
  }

  ngOnInit(): void {
    this.GetViajes();
    this.modalSS.$modal.subscribe((valor)=>(this.modalSwitch=valor));
  }

  GetViajes(){
    this.viajesService.GetViajes().subscribe({
      //next (paso exitoso)
      next: (viajes) => { console.log(viajes); this.viajes = viajes; console.log(this.viajes) },
      //nombre | (nombre) | () => { line1; line2 }
      //error (paso erroneo)
      error: (error) => { console.log(error); },
      //complete (paso sí o sí)
      complete: () => console.log("complete")
    });
  }

  GetViajesByCiudadId(){
    this.viajesService.GetViajes().subscribe({
      //next (paso exitoso)
      next: (viajes) => { console.log(viajes); this.viajes = viajes; console.log(this.viajes) },
      //nombre | (nombre) | () => { line1; line2 }
      //error (paso erroneo)
      error: (error) => { console.log(error); },
      //complete (paso sí o sí)
      complete: () => console.log("complete")
    });
  }

}

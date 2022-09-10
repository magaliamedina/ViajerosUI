import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  baseUrl = environment.baseUrl + "Viajes";
  
  constructor(private httpClient: HttpClient) { }

  GetViajes() {
    return this.httpClient.get(this.baseUrl);
  }
  
  GetViajesByCiudadId(id: number){
    return this.httpClient.get(this.baseUrl +"/destino/"+ id);
  }

  AddViaje(viaje: any){
    var data: {};
    return this.httpClient.post(this.baseUrl, viaje);
  }


//   //EditVaije PUT Vaije, ViajeID
//   UpdatePet(viajeId: number, viaje: any){
//     return this.httpClient.put(this.baseUrl + viajeId, viaje);
//   }
  //DeletePet DELETE PetID
}
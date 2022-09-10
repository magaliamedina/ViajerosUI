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
  
  //GetPetsByBreed GET Breed
  //GetPetsByBreedAndOwnerId GET Breed,OwnerID
  //GetPetsVaccine GET PetID
  //GetPetsByOwnerId GET OwnerID
  //GetPetById GET PetID
//   GetViajesById(id: number){
//     return this.httpClient.get(this.baseUrl + id);
//   }

  //AddViaje POST Viaje
//   AddViaje(viaje: any){
//     var data: {};
//     console.log(viaje);
//     return this.httpClient.post(this.baseUrl, viaje);
//   }


//   //EditVaije PUT Vaije, ViajeID
//   UpdatePet(viajeId: number, viaje: any){
//     return this.httpClient.put(this.baseUrl + viajeId, viaje);
//   }
  //DeletePet DELETE PetID
}
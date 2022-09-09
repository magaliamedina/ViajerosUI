import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { SwitchService } from './services/switch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'viajerosUI';
  modalSwitch:boolean;

  constructor(private modalSS:SwitchService){

  }

  openModal(){
    this.modalSwitch=true;    
  }

  ngOnInit(): void {
    this.modalSS.$modal.subscribe((valor)=>(this.modalSwitch=valor));
  }
}

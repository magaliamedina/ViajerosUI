import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../services/switch.service';

@Component({
  selector: 'app-nuevo-modal',
  templateUrl: './nuevo-modal.component.html',
  styleUrls: ['./nuevo-modal.component.scss']
})
export class NuevoModalComponent implements OnInit {

  constructor(private modalSS: SwitchService) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalSS.$modal.emit(false);
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuevoModalComponent } from './nuevo-modal/nuevo-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoModalComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

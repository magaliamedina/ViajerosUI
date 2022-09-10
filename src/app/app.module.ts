import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuevoModalComponent } from './nuevo-modal/nuevo-modal.component';
import { HttpClientModule } from '@angular/common/http';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NuevoModalComponent
    
    ],
  imports: [
    BrowserModule,
    HttpClientModule  ,    
    ReactiveFormsModule, 
    FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenweathercontrolsComponent } from './openweathercontrols/openweathercontrols.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {path:'weather',component:OpenweathercontrolsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
  ]
})
export class AppRoutingModule { }

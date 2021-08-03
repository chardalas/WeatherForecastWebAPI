import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenweathercontrolsComponent } from './openweathercontrols/openweathercontrols.component';
import { OpenweatherloginComponent } from './openweatherlogin/openweatherlogin.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'weather',component:OpenweathercontrolsComponent },
  { path:'',component:OpenweatherloginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

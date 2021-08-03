import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpenweathercontrolsComponent } from './openweathercontrols/openweathercontrols.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'weather',component:OpenweathercontrolsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

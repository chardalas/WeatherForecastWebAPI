import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { currentWeather } from './currentWeather/currentWeather';
import { OpenweatherloginComponent } from './openweatherlogin/openweatherlogin.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'weather',component:currentWeather },
  { path:'',component:OpenweatherloginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

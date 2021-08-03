import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherCompoment } from './current-weather/current-weather';
import { OpenweatherloginComponent } from './openweatherlogin/openweatherlogin.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'weather',component:CurrentWeatherCompoment },
  { path:'',component:OpenweatherloginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

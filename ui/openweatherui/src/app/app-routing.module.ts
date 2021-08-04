import { NgModule } from '@angular/core';
import { CurrentWeatherComponent } from './current-weather/current-weather';
import { OneHourForecastComponent } from './one-hour-forecast/one-hour-forecast.component';
import { TwoDaysForecastComponent } from './two-days-forecast/two-days-forecast.component';
import { SevenDaysForecastComponent } from './seven-days-forecast/seven-days-forecast.component';
import { OpenweatherloginComponent } from './openweatherlogin/openweatherlogin.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'current-weather',component:CurrentWeatherComponent },
  { path:'one-hour-forecast',component:OneHourForecastComponent },
  { path:'two-days-forecast',component:TwoDaysForecastComponent },
  { path:'',component:SevenDaysForecastComponent },
  { path:'',component:OpenweatherloginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

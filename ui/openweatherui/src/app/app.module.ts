import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrentWeatherComponent } from './current-weather/current-weather';
import { OpenweatherloginComponent } from './openweatherlogin/openweatherlogin.component';
import { OpenweatherserviceService } from './openweatherservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { OneHourForecastComponent } from './one-hour-forecast/one-hour-forecast.component';
import { TwoDaysForecastComponent } from './two-days-forecast/two-days-forecast.component';
import { SevenDaysForecastComponent } from './seven-days-forecast/seven-days-forecast.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    OpenweatherloginComponent,
    OneHourForecastComponent,
    TwoDaysForecastComponent,
    SevenDaysForecastComponent,
    HomePageComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [OpenweatherserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

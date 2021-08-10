import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrentWeatherComponent } from './home-page/current-weather/current-weather';
import { LoginComponent } from './login/login.component';
import { OpenweatherserviceService } from './openweatherservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { OneHourForecastComponent } from './home-page/one-hour-forecast/one-hour-forecast.component';
import { TwoDaysForecastComponent } from './home-page/two-days-forecast/two-days-forecast.component';
import { SevenDaysForecastComponent } from './home-page/seven-days-forecast/seven-days-forecast.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    LoginComponent,
    OneHourForecastComponent,
    TwoDaysForecastComponent,
    SevenDaysForecastComponent,
    HomePageComponent
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

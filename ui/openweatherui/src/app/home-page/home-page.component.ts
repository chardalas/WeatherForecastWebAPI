import { Component, OnInit } from '@angular/core';
import { OpenweatherserviceService } from 'src/app/openweatherservice.service';
import { CurrentWeatherComponent } from './current-weather/current-weather';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  city: string;
  forecast: string;
  cw:CurrentWeatherComponent;
  
  constructor() { }

  currentWeather:any = <any>{};

  ngOnInit(): void {
   // this.refreshCurrentWeather(this.city);
  }
  
  onItemChange(forecast:any){
    console.log(" Value is : ", forecast);
 }

  refreshCurrentWeather(city: string) {
    console.log(this.forecast);  
    switch (this.forecast) {
        case "current":
            console.log(this.currentWeather);
            this.cw.refreshCurrentWeather(city);
            console.log("It is a Sunday.");
            break;
        case "one-hour":
            console.log("It is a Monday.");
            break;
        case "two-days":
            console.log("It is a Tuesday.");
            break;
        case "four-days":
            console.log("It is a Wednesday.");
            break;       
        default:
            console.log("No such day exists!", this.forecast);
            break;
    }    
  }
}

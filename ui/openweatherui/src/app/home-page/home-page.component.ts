import { Component, OnInit } from '@angular/core';
import { OpenweatherserviceService } from 'src/app/openweatherservice.service';
import { CurrentWeatherComponent } from './current-weather/current-weather';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  private isSubmitted = false;
  city: string;
  forecast: string;
  cw:CurrentWeatherComponent;
  lastix : string = "Krokodilakias";
  currentWeather:any = <any>{};

  constructor(private service:OpenweatherserviceService,public fb: FormBuilder) { 
    this.cw = new CurrentWeatherComponent ();
    this.cw.salamoura = this.lastix;
    console.log(this.currentWeather);
  }

  ngOnInit(): void {
    //this.refreshCurrentWeather(this.city);
  }
  
  weatherSearch = this.fb.group({
    forecast: [''],
    city: ['']
  })

  get myForm() {
    return this.weatherSearch.get('forecast');
  }
  
  onSubmit() {
    this.isSubmitted = true;
    if (!this.weatherSearch.valid) {
      return false;
    } else {      
      this.forecast = this.weatherSearch.value.forecast
      console.log(this.weatherSearch.value.city)
      this.service.getCurrentWeather(this.weatherSearch.value.city).subscribe(data=>{
        this.currentWeather = data;
       //this.cw.currentWeather = data;
        //console.log(this.cw.currentWeather);
        //console.log(this.currentWeather);
        this.cw.refreshCurrentWeather(data);
      });
      return (JSON.stringify(this.weatherSearch.value))
    }
  }

  onItemChange(forecast:any){
    this.forecast = forecast;    
  }
  
  onClickSubmit(data: any) {
    console.log(data.city +data.name +' '+ data.current)
    switch (data.value) {
      case "current":
          console.log("It is a Sunday.");          
          break;
      case "one-hour":
          console.log("It is a Monday.");
          break;
      case "two-days":
          console.log("It is a Tuesday.");
          break;
      case "seven-days":
          console.log("It is a Wednesday.");
          break;       
      default:
          console.log("No such day exists!", this.forecast);
          break;
  }    
}
  

  readWeatherParams(city: string) {
    switch (this.forecast) {
        case "current":
            console.log("It is a Sunday.");
            this.service.getCurrentWeather(city).subscribe(data=>{
              this.currentWeather = data;
              this.cw.currentWeather = data;
              //console.log(this.cw.currentWeather);
              //console.log(this.currentWeather);
              this.cw.refreshCurrentWeather(this.currentWeather);
            });
            break;
        case "one-hour":
            console.log("It is a Monday.");
            break;
        case "two-days":
            console.log("It is a Tuesday.");
            break;
        case "seven-days":
            console.log("It is a Wednesday.");
            break;       
        default:
            console.log("No such day exists!", this.forecast);
            break;
    }    
  }
}

import { Component, OnInit } from '@angular/core';
import { OpenweatherserviceService } from 'src/app/openweatherservice.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],   
})
export class CurrentWeatherComponent implements OnInit {
  
  city: string;
  forecast: string;
  
  constructor(private service:OpenweatherserviceService) { }

  currentWeather:any = <any>{};

  ngOnInit(): void {
   this.refreshCurrentWeather(this.city) ;
  }
  
  onItemChange(forecast:any){
    console.log(" Value is : ", forecast);
 }
 
  refreshCurrentWeather(city: string) {
    console.log(this.currentWeather);
    this.service.getCurrentWeather(city).subscribe(data=>{
      this.currentWeather=data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { OpenweatherserviceService } from 'src/app/openweatherservice.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],   
})
export class CurrentWeatherComponent implements OnInit {
  
  city: string;
  forecast: string;
  currentWeather:any = <any>{};
  salamoura: string;
  
  //constructor(private service:OpenweatherserviceService) { }

  constructor() { 
    this.currentWeather = <any>{};
    this.city = "athens";
  }

  ngOnInit(): void {
    //console.log(this.currentWeather);
    console.log("sssss");
   //this.refreshCurrentWeather(this.currentWeather) ;
  }
  
  onItemChange(forecast:any){
  //  console.log(" Value is : ", forecast);
 }
 
  refreshCurrentWeather(currentWeather: any) {     
    this.city='ad';
    this.currentWeather = currentWeather;
    //console.log(this.salamoura);
    console.log("---");
    console.log(this.currentWeather);
    console.log("---");
    // this.service.getCurrentWeather(city).subscribe(data=>{
    //   this.currentWeather=data;
    // });
  }
}

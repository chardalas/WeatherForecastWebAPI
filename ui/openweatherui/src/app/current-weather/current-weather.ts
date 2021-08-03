import { Component, OnInit } from '@angular/core';
import { OpenweatherserviceService } from 'src/app/openweatherservice.service';

@Component({
  selector: 'app-currentWeather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherCompoment implements OnInit {

  constructor(private service:OpenweatherserviceService) { }

  CurrentWeather:any=[]; 

  ngOnInit(): void {
    this.refreshCurrentWeather() ;
  }

  refreshCurrentWeather(){
    this.service.getCurrentWeather().subscribe(data=>{
        this.CurrentWeather=data; 
      });
  }

}

import { Component, Inject, Input, OnInit } from '@angular/core';
import { OpenweatherserviceService } from 'src/app/openweatherservice.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})

export class CurrentWeatherComponent implements OnInit {

  city: string = 'Athens'
  forecast: string;
  weather: any = <any>{};

  constructor(private service: OpenweatherserviceService) { }

  ngOnInit(): void {
    this.service.currentCity
      .subscribe(
        city => {
          this.city = city
        });

    this.service.getCurrentWeather(this.city)
      .subscribe(data => {
        this.weather = data;
        console.log(data)
      });
  }

  setCityName() {
    this.service.currentCity
      .subscribe(
        city => {
          this.city = city
        });


    this.service.getCurrentWeather(this.city)
    console.log(this.weather)
    console.log(this.city + '---------------->>>')
  }

  refreshCurrentWeather(currentWeather: any) {

    this.city = 'ad';
    this.weather.Name = currentWeather.Name;
    //console.log(this.salamoura);    
    console.log(this.weather);
    // this.service.getCurrentWeather(city).subscribe(data=>{
    //   this.currentWeather=data;
    // });
  }
}

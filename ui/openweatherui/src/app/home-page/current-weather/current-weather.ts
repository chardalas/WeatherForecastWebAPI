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

  //message: string = 'lima';
  city: string = 'tokio'
  forecast: string;
  currentWeather: any = <any>{};

  constructor(private service: OpenweatherserviceService) { }

  ngOnInit(): void {
    this.service.currentCity
      .subscribe(
        city => {
          this.city = city
        });

    this.service.getCurrentWeather(this.city)
      .subscribe(data => {
        this.currentWeather = data;
      });
  }

  setCityName() {
    this.service.currentCity
      .subscribe(
        city => {
          this.city = city
        });


    this.service.getCurrentWeather(this.city)
    console.log(this.currentWeather)
    console.log(this.city + '---------------->>>')
  }

  refreshCurrentWeather(currentWeather: any) {

    this.city = 'ad';
    this.currentWeather.Name = currentWeather.Name;
    //console.log(this.salamoura);    
    console.log(this.currentWeather);
    // this.service.getCurrentWeather(city).subscribe(data=>{
    //   this.currentWeather=data;
    // });
  }
}

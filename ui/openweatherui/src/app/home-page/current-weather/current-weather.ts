import { Component, Inject, Input, OnInit } from '@angular/core';
import { OpenweatherserviceService } from 'src/app/openweatherservice.service';

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
      .subscribe(
        data => {
          this.weather = data;
        });
  }
}

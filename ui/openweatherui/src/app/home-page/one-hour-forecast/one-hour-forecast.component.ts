import { Component, OnInit } from '@angular/core';
import { OpenweatherserviceService } from 'src/app/openweatherservice.service';

@Component({
  selector: 'app-one-hour-forecast',
  templateUrl: './one-hour-forecast.component.html',
  styleUrls: ['./one-hour-forecast.component.css']
})

export class OneHourForecastComponent implements OnInit {

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

    this.service.getMinutelyWForecast(this.city)
      .subscribe(
        data => {
          this.weather = data;
        });
  }
}

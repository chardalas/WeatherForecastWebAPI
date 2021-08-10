import { Component, OnInit } from '@angular/core';
import { OpenweatherserviceService } from 'src/app/openweatherservice.service';

@Component({
  selector: 'app-seven-days-forecast',
  templateUrl: './seven-days-forecast.component.html',
  styleUrls: ['./seven-days-forecast.component.css']
})

export class SevenDaysForecastComponent implements OnInit {

  city: string
  forecast: string;
  weather: any = <any>{};

  constructor(private service: OpenweatherserviceService) { }

  ngOnInit(): void {
    this.service.currentCity
      .subscribe(
        city => {
          this.city = city
        });

    this.service.getDailyForecast(this.city)
      .subscribe(
        data => {
          this.weather = data;
        });
  }
}

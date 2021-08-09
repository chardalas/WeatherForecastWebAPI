import { Component, OnInit } from '@angular/core';
import { OpenweatherserviceService } from 'src/app/openweatherservice.service';

@Component({
  selector: 'app-two-days-forecast',
  templateUrl: './two-days-forecast.component.html',
  styleUrls: ['./two-days-forecast.component.css']
})

export class TwoDaysForecastComponent implements OnInit {

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

    this.service.getHourlyForecast(this.city)
      .subscribe(
        data => {
          this.weather = data;
        });
  }
}

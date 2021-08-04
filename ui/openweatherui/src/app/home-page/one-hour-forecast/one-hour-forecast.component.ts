import { Component, OnInit } from '@angular/core';
import { OpenweatherserviceService } from 'src/app/openweatherservice.service';

@Component({
  selector: 'app-one-hour-forecast',
  templateUrl: './one-hour-forecast.component.html',
  styleUrls: ['./one-hour-forecast.component.css']
})
export class OneHourForecastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

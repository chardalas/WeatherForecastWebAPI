import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpenweatherserviceService } from 'src/app/openweatherservice.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})

export class CurrentWeatherComponent implements OnInit {

  city: string
  forecast: string;
  weather: any = <any>{};

  constructor(private service: OpenweatherserviceService,
    private router: Router) { }

  ngOnInit(): void {
    this.service.currentCity
      .subscribe(
        city => {
          this.city = city;
        });

    this.service.getCurrentWeather(this.city)
      .subscribe(
        data => {
          this.weather = data;
        },
        err => {
          if (err.status == 401) {
            this.router.navigateByUrl('/')
            alert('You are not authorised to access this page')
          }

          if (err.status == 404) {
            alert(`The city "${this.city}" does not exist`)
            this.router.navigateByUrl('/weather')
          }
        },
        () => {
          //this.router.navigateByUrl('/weather')
        });
  }
}

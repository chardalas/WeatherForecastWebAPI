import { Component, Inject, Input, OnInit } from '@angular/core';
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
  router: any;

  constructor(private service: OpenweatherserviceService) { }

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
          // if user is not authenticated
          if (err.status == 404) {
            console.log(err)
            this.router.navigateByUrl('/weather')
            //this.router.navigateByUrl('/')
          }
        },
        () => {
          //this.router.navigateByUrl('/weather')
        });
  }
}

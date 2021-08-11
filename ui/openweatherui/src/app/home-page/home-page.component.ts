import { Component, OnInit } from '@angular/core';
import { OpenweatherserviceService } from 'src/app/openweatherservice.service';
import { FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  city: string;
  forecast: string = "current";
  currentWeather: any = <any>{};
  minutelyWeather: any = <any>{};
  hourlyWeather: any = <any>{};
  dailyWeather: any = <any>{};

  constructor(
    private service: OpenweatherserviceService,
    private router: Router,
    public fb: FormBuilder) { }

  ngOnInit(): void { }

  weatherSearch = this.fb.group({
    forecast: [''],
    city: ['']
  })

  onForecastChange(forecast: string) {

    if (this.city == '' || this.city == undefined) {
      return
    }

    switch (forecast) {
      case "current":
        this.service.getCurrentWeather(this.city)
          .subscribe(
            data => {
              this.currentWeather = data;
            },
            err => {
              if (err.status == 401) {
                this.router.navigateByUrl('/')
                alert('You are not authorised to access this page')
              }
              
              if (err.status == 404) {
                alert(`The city "${this.city}" does not exist`)
                this.weatherSearch.reset();
              }
            },
            () => {
              this.router.navigateByUrl('/weather')
            });
        break;
      case "one-hour":
        this.service.getMinutelyWForecast(this.city)
          .subscribe(
            data => {
              this.minutelyWeather = data;
            });
        break;
      case "two-days":
        this.service.getHourlyForecast(this.city)
          .subscribe(
            data => {
              this.hourlyWeather = data;
            });
        break;
      case "seven-days":
        this.service.getDailyForecast(this.city)
          .subscribe(
            data => {
              this.dailyWeather = data;
            });
        break;
      default:
        break;
    }
  }

  onSubmit() {

    if (this.weatherSearch.value.city == '') {
      this.service.changeCity('')
      this.forecast = 'current'
      return false
    }

    this.service.currentCity
      .subscribe(
        city => {
          this.city = city
        });

    this.service.changeCity(this.weatherSearch.value.city)
    this.forecast = 'current'
    //this.forecast = this.weatherSearch.value.forecast
    //this.onForecastChange(this.forecast)
    return true

  }
}

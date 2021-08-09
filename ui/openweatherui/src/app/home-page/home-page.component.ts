import { Component, OnInit } from '@angular/core';
import { OpenweatherserviceService } from 'src/app/openweatherservice.service';
import { CurrentWeatherComponent } from './current-weather/current-weather';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private isSubmitted = false;
  city: string = 'Athens';
  forecast: string;
  currentWeather: any = <any>{};
  minutelyWeather: any = <any>{};

  constructor(
    private service: OpenweatherserviceService,
    public fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.service.currentCity
      .subscribe(
        city => {
          this.city = city
        });

    this.service.getCurrentWeather(this.city)
      .subscribe(
        data => {
          this.currentWeather = data;
        });

    this.service.getMinutelyWForecast(this.city)
      .subscribe(
        data => {
          this.minutelyWeather = data;
        });
  }

  weatherSearch = this.fb.group({
    forecast: [''],
    city: ['']
  })

  get myForm() {
    return this.weatherSearch.get('forecast');
  }

  onSubmit() {
    this.isSubmitted = true;

    if (!this.weatherSearch.valid) {
      return false;
    } else {

      this.forecast = this.weatherSearch.value.forecast

      switch (this.forecast) {
        case "current":
          this.service.changeCity(this.weatherSearch.value.city);
          //this.service.getCurrentWeather(this.weatherSearch.value.city)          
          break;
        case "one-hour":
          this.service.changeCity(this.weatherSearch.value.city);
          console.log(this.forecast);
          break;
        case "two-days":
          console.log(this.forecast);
          break;
        case "seven-days":
          console.log(this.forecast);
          break;
        default:
          console.log(this.forecast);
          break;
      }
    }
    return true
    //return (JSON.stringify(this.weatherSearch.value))
  }
}

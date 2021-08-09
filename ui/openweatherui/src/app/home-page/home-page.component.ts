import { Component, OnInit } from '@angular/core';
import { OpenweatherserviceService } from 'src/app/openweatherservice.service';
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private isSubmitted = false;
  city: string;
  forecast: string = "current";
  currentWeather: any = <any>{};
  minutelyWeather: any = <any>{};
  hourlyWeather: any = <any>{};
  dailyWeather: any = <any>{};

  constructor(
    private service: OpenweatherserviceService,
    public fb: FormBuilder) {
  }

  ngOnInit(): void { }

  weatherSearch = this.fb.group({
    forecast: [''],
    city: ['']
  })

  get myForm() {
    return this.weatherSearch.get('forecast');
  }

  onForecastChange(forecast: string) {

    this.service.currentCity
      .subscribe(
        city => {
          this.city = city
        });

    switch (forecast) {
      case "current":
        this.service.getCurrentWeather(this.city)
          .subscribe(
            data => {
              this.currentWeather = data;
            });
        break;
      case "one-hour":
        console.log("edwww")
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
  resetForecast() {
    this.forecast = 'current'
  }
  onSubmit() {
    this.isSubmitted = true;

    if (!this.weatherSearch.valid) {
      return false;
    } else {

      //this.forecast = this.weatherSearch.value.forecast
      //this.onForecastChange(this.weatherSearch.value.forecast)
      this.service.changeCity(this.weatherSearch.value.city)
    }
    return true
  }
}

// import { Component, OnInit } from '@angular/core';
// import { OpenweatherserviceService } from 'src/app/openweatherservice.service';
// import { FormBuilder } from "@angular/forms";

// @Component({
//   selector: 'app-home-page',
//   templateUrl: './home-page.component.html',
//   styleUrls: ['./home-page.component.css']
// })
// export class HomePageComponent implements OnInit {

//   private isSubmitted = false;
//   city: string = 'Athens';
//   forecast: string;
//   currentWeather: any = <any>{};
//   minutelyWeather: any = <any>{};
//   hourlyWeather: any = <any>{};
//   dailyWeather: any = <any>{};

//   constructor(
//     private service: OpenweatherserviceService,
//     public fb: FormBuilder) {
//   }

//   ngOnInit(): void {
//     this.service.currentCity
//       .subscribe(
//         city => {
//           this.city = city
//         });

//     this.service.getCurrentWeather(this.city)
//       .subscribe(
//         data => {
//           this.currentWeather = data;
//         });

//     this.service.getMinutelyWForecast(this.city)
//       .subscribe(
//         data => {
//           this.minutelyWeather = data;
//         });

//     this.service.getHourlyForecast(this.city)
//       .subscribe(
//         data => {
//           this.hourlyWeather = data;
//         });

//     this.service.getDailyForecast(this.city)
//       .subscribe(
//         data => {
//           this.dailyWeather = data;
//         });
//   }

//   weatherSearch = this.fb.group({
//     forecast: [''],
//     city: ['']
//   })

//   get myForm() {
//     return this.weatherSearch.get('forecast');
//   }

//   onForecastChange(value: any) {
//     this.service.changeCity(this.weatherSearch.value.city);
//     console.log(" Value is : ", value);
//   }

//   onSubmit() {
//     this.isSubmitted = true;

//     if (!this.weatherSearch.valid) {
//       return false;
//     } else {

//       this.forecast = this.weatherSearch.value.forecast

//       switch (this.forecast) {
//         case "current":
//           this.service.changeCity(this.weatherSearch.value.city);
//           //this.service.getCurrentWeather(this.weatherSearch.value.city)          
//           break;
//         case "one-hour":
//           this.service.changeCity(this.weatherSearch.value.city);
//           console.log(this.forecast);
//           break;
//         case "two-days":
//           this.service.changeCity(this.weatherSearch.value.city);
//           console.log(this.forecast);
//           break;
//         case "seven-days":
//           this.service.changeCity(this.weatherSearch.value.city);
//           console.log(this.forecast);
//           break;
//         default:
//           console.log(this.forecast);
//           break;
//       }
//     }
//     return true
//     //return (JSON.stringify(this.weatherSearch.value))
//   }
// }

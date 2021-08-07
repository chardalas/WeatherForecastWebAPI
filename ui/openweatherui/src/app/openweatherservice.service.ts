import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})

export class OpenweatherserviceService {

  private city: string;
  private forecast: string;

  currentWeather2: any = <any>{};

  readonly currentWeather = "http://localhost:54426/weather?city=";

  public setCurrentWea(value: any) {
    this.currentWeather2 = value;
  }
  public setTest(value: string) {
    this.city = value;
  }

  constructor(private http: HttpClient) { }

  getCurrentWeather1(city: string): Observable<any[]> {
    return this.http.get<any>(this.currentWeather + city);
  }

  getOneHourForecast(city: string): Observable<any[]> {
    return this.http.get<any>(this.currentWeather + city);
  }

  getTwoDaysForecast(city: string): Observable<any[]> {
    return this.http.get<any>(this.currentWeather + city);
  }

  getSevenDaysForecast(city: string): Observable<any[]> {
    return this.http.get<any>(this.currentWeather + city);
  }

  getCurrentWeather(city: string): Observable<any[]> {
    return this.http.get<any>(this.currentWeather + city);
  }

  // getUv(lat: number, lon: number) {
  //   let startDate = Math.round(+moment(new Date()).subtract(1, 'week').toDate() / 1000);
  //   let endDate = Math.round(+moment(new Date()).add(1, 'week').toDate() / 1000);
  //   return this.http.get(`$http://localhost:54426/uvi/history?lat=${lat}&lon=${lon}&start=${startDate}&end=${endDate}&appid=`)
  // }
}

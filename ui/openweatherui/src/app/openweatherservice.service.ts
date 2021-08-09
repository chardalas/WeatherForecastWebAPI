import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})

export class OpenweatherserviceService {

  private city: string;
  private forecast: string;

  currentWeather2: any = <any>{};

  readonly currentWeather = "http://localhost:54426/weather?current=";
  readonly minutelyWeather = "http://localhost:54426/weather?minutely=";

  public setCurrentWea(value: any) {
    this.currentWeather2 = value;
  }
  public setTest(value: string) {
    this.city = value;
  }

  private citySource = new BehaviorSubject<string>('Athens');
  currentCity = this.citySource.asObservable();

  constructor(private http: HttpClient) { }

  changeCity(city: string) {
    this.citySource.next(city);
  }

  setCity(city: string) {
    this.city = city
  }

  getCurrentWeather1(city: string): Observable<any[]> {
    return this.http.get<any>(this.currentWeather + city);
  }

  getMinutelyWForecast(city: string): Observable<any[]> {
    return this.http.get<any>(this.minutelyWeather + city);
  }

  getTwoDaysForecast(city: string): Observable<any[]> {
    return this.http.get<any>(this.currentWeather + city);
  }

  getSevenDaysForecast(city: string): Observable<any[]> {
    return this.http.get<any>(this.currentWeather + city);
  }

  getCurrentWeather(city: string) {
    return this.http.get(this.currentWeather + city);
  }

  // getUv(lat: number, lon: number) {
  //   let startDate = Math.round(+moment(new Date()).subtract(1, 'week').toDate() / 1000);
  //   let endDate = Math.round(+moment(new Date()).add(1, 'week').toDate() / 1000);
  //   return this.http.get(`$http://localhost:54426/uvi/history?lat=${lat}&lon=${lon}&start=${startDate}&end=${endDate}&appid=`)
  // }
}

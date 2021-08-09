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
  readonly hourlyWeather = "http://localhost:54426/weather?hourly=";
  readonly dailyWeather = "http://localhost:54426/weather?daily=";

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

  getCurrentWeather(city: string) {     // todo: check why is this not Observable?
    return this.http.get(this.currentWeather + city);
  }

  getMinutelyWForecast(city: string): Observable<any[]> {
    return this.http.get<any>(this.minutelyWeather + city);
  }

  getHourlyForecast(city: string): Observable<any[]> { // todo: check why is this Observable?
    return this.http.get<any>(this.hourlyWeather + city);
  }

  getDailyForecast(city: string): Observable<any[]> {
    return this.http.get<any>(this.dailyWeather + city);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class OpenweatherserviceService {
  
  readonly currentWeatherAPI = "http://localhost:54426/weather?current=";
  readonly minutelyWeatherAPI = "http://localhost:54426/weather?minutely=";
  readonly hourlyWeatherAPI = "http://localhost:54426/weather?hourly=";
  readonly dailyWeatherAPI = "http://localhost:54426/weather?daily=";
  readonly getUserAPI = "http://localhost:54426/user?id=";
  readonly postUserAPI = "http://localhost:54426/user";  

  private citySource = new BehaviorSubject<string>('Athens');

  currentCity = this.citySource.asObservable();

  constructor(private http: HttpClient) { }

  changeCity(city: string) {
    this.citySource.next(city);
  }

  getUser(id: any): Observable<any[]> {
    return this.http.get<any>(this.getUserAPI + id);
  }

  postUser(user: any): Observable<any[]> {
    return this.http.get<any>(this.postUserAPI);
  }

  getCurrentWeather(city: string): Observable<any[]> {
    return this.http.get<any>(this.currentWeatherAPI + city);
  }

  getMinutelyWForecast(city: string): Observable<any[]> {
    return this.http.get<any>(this.minutelyWeatherAPI + city);
  }

  getHourlyForecast(city: string): Observable<any[]> { // todo: check why is this Observable?
    return this.http.get<any>(this.hourlyWeatherAPI + city);
  }

  getDailyForecast(city: string): Observable<any[]> {
    return this.http.get<any>(this.dailyWeatherAPI + city);
  }
}

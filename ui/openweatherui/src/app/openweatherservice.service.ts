import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OpenweatherserviceService {

  readonly currentWeatherAPI = "http://localhost:54426/weather?current=";
  readonly minutelyWeatherAPI = "http://localhost:54426/weather?minutely=";
  readonly hourlyWeatherAPI = "http://localhost:54426/weather?hourly=";
  readonly dailyWeatherAPI = "http://localhost:54426/weather?daily=";
  readonly userLoginAPI = "http://localhost:54426/userlogin";
  readonly userCreateAPI = "http://localhost:54426/createuser";

  email: string
  password: string

  private citySource = new BehaviorSubject<string>('Athens');

  currentCity = this.citySource.asObservable();

  constructor(private http: HttpClient) { }

  changeCity(city: string) {
    this.citySource.next(city);
  }

  postUserLogin(credentials: any): Observable<string> {
    this.email = credentials.email, this.password = credentials.password

    return this.http.post<any>(this.userLoginAPI, '', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(credentials.email + ':' + credentials.password)
      })
    });
  }

  postUserCreate(user: any): Observable<any> {
    return this.http.post<any>(this.userCreateAPI, user);
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

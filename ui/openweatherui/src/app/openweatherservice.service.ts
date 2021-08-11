import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class OpenweatherserviceService {
  
  readonly currentWeatherAPI = "http://localhost:54426/weather?current=";
  readonly minutelyWeatherAPI = "http://localhost:54426/weather?minutely=";
  readonly hourlyWeatherAPI = "http://localhost:54426/weather?hourly=";
  readonly dailyWeatherAPI = "http://localhost:54426/weather?daily=";
  readonly getUserAPI = "http://localhost:54426/user?email=";
  readonly postUserAPI = "http://localhost:54426/user";  

  private citySource = new BehaviorSubject<string>('Athens');

  currentCity = this.citySource.asObservable();

  constructor(private http: HttpClient) { }

  changeCity(city: string) {
    this.citySource.next(city);
  }

  getUser(email: string): Observable<string> {
    return this.http.get<any>(this.getUserAPI + email) 
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

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}

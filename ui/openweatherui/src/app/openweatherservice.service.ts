import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OpenweatherserviceService {

  readonly CurrentWeather = "http://localhost:54426/weather?city=athens";

  constructor(private http:HttpClient) { }

  getCurrentWeather():Observable<any[]>{
    return this.http.get<any>(this.CurrentWeather);
  }

}

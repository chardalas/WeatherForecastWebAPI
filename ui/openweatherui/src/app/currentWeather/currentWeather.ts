import { Component, OnInit } from '@angular/core';
import { OpenweatherserviceService } from 'src/app/openweatherservice.service';

@Component({
  selector: 'app-currentWeather',
  templateUrl: './currentWeather.component.html',
  styleUrls: ['./currentWeather.component.css']
})
export class currentWeather implements OnInit {

  constructor(private service:OpenweatherserviceService) { }

  CurrentWeather:any=[]; 

  ngOnInit(): void {
    this.refreshCurrentWeather() ;
  }

  refreshCurrentWeather(){
    this.service.getCurrentWeather().subscribe(data=>{
        this.CurrentWeather=data; 
      });
  }

}

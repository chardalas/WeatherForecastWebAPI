import { Component, OnInit } from '@angular/core';
import { OpenweatherserviceService } from 'src/app/openweatherservice.service';

@Component({
  selector: 'app-openweathercontrols',
  templateUrl: './openweathercontrols.component.html',
  styleUrls: ['./openweathercontrols.component.css']
})
export class OpenweathercontrolsComponent implements OnInit {

  constructor(private service:OpenweatherserviceService) { }

  CurrentWeather:any=[]; 

  ngOnInit(): void {
    this.refreshCurrentWeather() ;
  }

  refreshCurrentWeather(){
    this.service.getWeather().subscribe(data=>{
        this.CurrentWeather=data; 
      });
  }

}

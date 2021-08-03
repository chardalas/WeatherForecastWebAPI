import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OpenweathercontrolsComponent } from './openweathercontrols/openweathercontrols.component';
import { OpenweatherloginComponent } from './openweatherlogin/openweatherlogin.component';
import { OpenweatherserviceService } from './openweatherservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    OpenweathercontrolsComponent,
    OpenweatherloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [OpenweatherserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OpenweathercontrolsComponent } from './openweathercontrols/openweathercontrols.component';
import { OpenweatherviewComponent } from './openweatherview/openweatherview.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenweathercontrolsComponent,
    OpenweatherviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

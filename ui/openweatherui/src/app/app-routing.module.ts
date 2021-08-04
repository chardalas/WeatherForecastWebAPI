import { NgModule } from '@angular/core';
import { OpenweatherloginComponent } from './openweatherlogin/openweatherlogin.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'',component:HomePageComponent },
  { path:'',component:OpenweatherloginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

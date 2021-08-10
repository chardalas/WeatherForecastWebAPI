import { NgModule } from '@angular/core';
import { LoginComponent } from './openweatherlogin/openweatherlogin.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'weather',component:HomePageComponent },
  { path:'',component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

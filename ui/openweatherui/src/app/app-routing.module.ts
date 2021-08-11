import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './login/signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'singup', component: SignupComponent },
  { path: 'weather', component: HomePageComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

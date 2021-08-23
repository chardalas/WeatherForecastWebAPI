import { Component, OnInit } from '@angular/core';
import { OpenweatherserviceService } from 'src/app/openweatherservice.service';
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  private credentials: any
  email: string
  password: string

  constructor(
    private service: OpenweatherserviceService,
    public fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void { }

  userSignin = this.fb.group({
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {

    if (this.userSignin.invalid) {
      console.log(this.userSignin)
      return
    }

    this.credentials = {
      'email': this.userSignin.value.email,
      'password': this.userSignin.value.password
    }

    this.service.postUserLogin(this.credentials)
      .subscribe(
        data => {
          console.log(data)
          this.email = data;
        },
        err => {
          console.log(err)
          if (err.status == 401) {
            alert(`The user "${this.credentials.email}" does not exist`)
            this.userSignin.reset();
          }

          if (err.status == 500) {
            alert(`Something unexpected happened. Error:${err.status}`)
            this.userSignin.reset();
          }
        },
        () => {
          this.router.navigateByUrl('/weather')
        }
      );
  }
}

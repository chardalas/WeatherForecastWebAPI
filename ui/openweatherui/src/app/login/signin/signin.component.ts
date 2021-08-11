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

  private user: any
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

    //console.log(this.userLogin)
    if (!this.userSignin.valid) {
      return
    }

    this.service.getUser(this.userSignin.value.email, this.userSignin.value.password)
      .subscribe(
        data => {
          console.log(data)
          this.email = data;
        },
        err => {
          console.log(err)
          if (err.status == 404) {
            this.router.navigateByUrl('/')
          }
        },
        () => {
          this.router.navigateByUrl('/weather')
        }
      );
  }
}

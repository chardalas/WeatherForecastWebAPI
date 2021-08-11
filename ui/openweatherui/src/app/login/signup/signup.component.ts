import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { OpenweatherserviceService } from 'src/app/openweatherservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private user: any
  username: string
  lastname: string
  email: string
  password: string

  constructor(private service: OpenweatherserviceService,
    public fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  userSignup = this.fb.group({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {

    if (this.userSignup.invalid) {
      return
    }
    
    this.user = {
      'firstname': this.userSignup.value.firstname,
      'lastname': this.userSignup.value.lastname,
      'email': this.userSignup.value.email,
      'password': this.userSignup.value.password,
    }

    this.service.postUser(this.user)
      .subscribe(
        data => {
          console.log(data)
          this.user = data;
        },
        err => {          
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

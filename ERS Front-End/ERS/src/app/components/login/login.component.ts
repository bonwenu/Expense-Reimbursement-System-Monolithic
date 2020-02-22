import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {AfterViewInit} from '@angular/core';   

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit  {

  username:string = 'javainuse';
  password:string = '';
  invalidLogin:boolean = false;
  errorMessage:string = 'Invalid Credentials';
  

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    console.log(sessionStorage.getItem('username') + " is currenyly logged in");
    console.log("Title: " +sessionStorage.getItem('title'));
}

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(["mHome"])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }
}

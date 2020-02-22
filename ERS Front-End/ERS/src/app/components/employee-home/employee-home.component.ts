import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("title") == "Manager") {
      this.router.navigate(['mHome'])
    } 
    console.log(typeof(sessionStorage.getItem("title")))
    console.log(typeof("Manager"));
  
  }

}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employees: object;

  constructor(private employeeData:EmployeeService, private router: Router) { }

  ngOnInit() {
    let x = sessionStorage.getItem("title");
    
    if (x !== "Manager") { 
      this.router.navigateByUrl("/403");
    }

    this.employeeData.getAllEmployees().subscribe(data => {
      this.employees = data;
      console.log("Employee list has been loaded");
    } );
  }

}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employees } from 'src/Employees';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  employee: Employees = new Employees();
  profileData: object;
  // Check if edit was pushed
  editActive : boolean = false;
  
  constructor(private employeeData: EmployeeService) { }

  ngOnInit() {
    // Gets user profile data;
    this.employeeData.getEmployeeById(Number(sessionStorage.getItem("workerId"))).subscribe(data => {
      this.profileData = data;
      sessionStorage.setItem("pData", JSON.stringify(this.profileData));
      console.log("Profile data loaded");
      
    });
  }
  // Edit
  edit() {
    this. editActive = true;
  }

  // Cancel button
  cancel() {
    this. editActive = false;
  }
  
  applyChanges() {
    this. editActive = false;
    this.testForNoChange();
    this.employeeData.updateEmployee(this.employee).subscribe(data => {
      // Updated information is sent from backend
      this.profileData = data;
      sessionStorage.removeItem("pData");
      sessionStorage.setItem("pData", JSON.stringify(this.profileData));
      // Reset form fields
      this.employee = new Employees();
    });
  }

  testForNoChange() {

    let x = JSON.parse(sessionStorage.getItem("pData"));

    if (this.employee.firstName === undefined) {
      this.employee.firstName = x.firstName;
    }
    if (this.employee.lastName === undefined) {
      this.employee.lastName = x.lastName;
    }
    if (this.employee.streetAddress === undefined) {
      this.employee.streetAddress = x.streetAddress;
    }
    if (this.employee.state === undefined) {
      this.employee.state = x.state;
    }
    if (this.employee.city === undefined) {
      this.employee.city = x.city;
    }
    if (this.employee.zip === undefined) {
      this.employee.zip = x.zip;
    }
    if (this.employee.phone === undefined) {
      this.employee.phone = x.phone;
    }
    if (this.employee.email === undefined) {
      this.employee.email = x.email;
    }
    this.employee.workerId = x.workerId;
    this.employee.title = x.title;
    this.employee.username= x.username;
    this.employee.passCode = x.passCode;
    this.employee.hireDate = x.hireDate;
    this.employee.reportsTo = x.reportsTo;

    //console.log("Value of email is " + this.employee.firstName);
    
  }

}

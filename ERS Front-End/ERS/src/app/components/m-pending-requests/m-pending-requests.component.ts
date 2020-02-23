import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';;
import { Requests } from 'src/Requests';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employees } from 'src/Employees';

@Component({
  selector: 'app-m-pending-requests',
  templateUrl: './m-pending-requests.component.html',
  styleUrls: ['./m-pending-requests.component.css']
})
export class MPendingRequestsComponent implements OnInit {

  requests: Requests[];
  employeeName: any;
  

  constructor(private employeeData: EmployeeService, private requestData:RequestService, private router:Router) { }

  ngOnInit() {
    this.requestData.getAllPendingRequests().subscribe(data => {
      this.requests = data;
      console.log(this.requests);
      console.log("Pending requests have been loaded");

    });
    let x = Number(sessionStorage.getItem("workerId"))
    this.employeeData.getEmployeeNameById(x).subscribe(data => {
      this.employeeName = data;
      sessionStorage.setItem("name", data);
    });

  }

  approve(r:Requests) {
    r.resolvedBy = sessionStorage.getItem("name");
    r.status = "APPROVED"
    this.requestData.updateRequest(r).subscribe(data => {
      console.log("Request approved");
    });
    this.ngOnInit();
  }

  deny(r:Requests) {
    r.resolvedBy = sessionStorage.getItem("name");
    r.status = "DENIED"
    this.requestData.updateRequest(r).subscribe(data => {
      console.log("Request denied");
    });
    this.ngOnInit();
  }

}

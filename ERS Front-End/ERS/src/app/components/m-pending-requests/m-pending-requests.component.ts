import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';;
import { Requests } from 'src/Requests';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-m-pending-requests',
  templateUrl: './m-pending-requests.component.html',
  styleUrls: ['./m-pending-requests.component.css']
})
export class MPendingRequestsComponent implements OnInit {

  requests: object;
  employeeName: any;
  

  constructor(private employeeData: EmployeeService, private requestData:RequestService, private router:Router) { }

  ngOnInit() {
    // No access if not a manager
    let x = sessionStorage.getItem("title");
    
    if (x !== "Manager") { 
      this.router.navigateByUrl("/403");
    }
    this.requestData.getAllPendingRequests().subscribe(data => {
      this.requests = data;
      
      console.log("Pending requests have been loaded");

    });
    let id = Number(sessionStorage.getItem("workerId"))
    this.employeeData.getEmployeeNameById(id).subscribe(data => {
      this.employeeName = data;
      sessionStorage.setItem("name", data);
    });

  }

  approve(r:Requests) {
    r.resolvedBy = sessionStorage.getItem("name");
    r.status = "APPROVED"
    this.requestData.updateRequest(r).subscribe(data => {
      this.requests = data;
      console.log("Request approved");
    });
    
  }

  deny(r:Requests) {
    r.resolvedBy = sessionStorage.getItem("name");
    r.status = "DENIED"
    this.requestData.updateRequest(r).subscribe(data => {
      this.requests = data;
      console.log("Request denied");
    });
  }

  back() {
    if(sessionStorage.getItem("title") === "Manager") {
      this.router.navigateByUrl("/mHome");
    } 
    else {
      this.router.navigateByUrl("/eHome");
    }
}

}

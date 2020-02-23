import { Component, OnInit } from '@angular/core';
import { Requests } from 'src/Requests';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-requests',
  templateUrl: './create-requests.component.html',
  styleUrls: ['./create-requests.component.css']
})
export class CreateRequestsComponent implements OnInit {

  request: Requests = new Requests();
  requests = [];

  constructor(private requestData: RequestService, private router: Router) { }

  ngOnInit() {

  }

  back() {
    if(sessionStorage.getItem("title") === "Manager") {
      this.router.navigateByUrl("/mHome");
    } 
    else {
      this.router.navigateByUrl("/eHome");
    }
  }

  create(r : Requests) {
    r.empId = Number(sessionStorage.getItem("workerId"));
    r.status ="PENDING";
    r.resolvedBy = "--";
    this.requestData.createRequest(r).subscribe(data => {
      // Push new requests to Newly table
      this.requests.push(data);
    });
    // Clear fields
    this.request.amount = null;
    this.request.description = null;
  }
}

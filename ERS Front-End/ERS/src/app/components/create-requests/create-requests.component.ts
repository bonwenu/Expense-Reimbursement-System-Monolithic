import { Component, OnInit } from '@angular/core';
import { Requests } from 'src/Requests';
import { RequestService } from 'src/app/services/request.service';


@Component({
  selector: 'app-create-requests',
  templateUrl: './create-requests.component.html',
  styleUrls: ['./create-requests.component.css']
})
export class CreateRequestsComponent implements OnInit {

  amount: number;
  description: string
  id: number;
  request: Requests = new Requests();
  requests: Requests[] = [];
  i: number = 0;
  
  
  constructor(private requestData: RequestService) { }
  
  

  ngOnInit() {
  }

  create(r : Requests) {
    r.empId = Number(sessionStorage.getItem("workerId"));
    r.status ="PENDING";
    r.resolvedBy = "--";
    this.requestData.createRequest(r);
    this.requests.push(r);
  }
}

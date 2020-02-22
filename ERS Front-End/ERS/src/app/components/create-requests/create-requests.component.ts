import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/Employees';
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
  
  
  
  constructor(private requestData: RequestService) { }
  
  

  ngOnInit() {
  }

  create() {
    this.request.empId = Number(sessionStorage.getItem("workerId"));
    this.requestData.createRequest(this.request)
  }
}

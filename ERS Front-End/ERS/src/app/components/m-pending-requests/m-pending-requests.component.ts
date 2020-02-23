import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-pending-requests',
  templateUrl: './m-pending-requests.component.html',
  styleUrls: ['./m-pending-requests.component.css']
})
export class MPendingRequestsComponent implements OnInit {

  requests: object;

  constructor(private requestData:RequestService, private router:Router) { }

  ngOnInit() {
    this.requestData.getAllPendingRequests().subscribe(data => {
      this.requests = data;
      console.log(this.requests);
      console.log("Pending requests have been loaded");

    });

  }

}

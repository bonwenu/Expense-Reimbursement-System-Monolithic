import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-m-processed-requests',
  templateUrl: './m-processed-requests.component.html',
  styleUrls: ['./m-processed-requests.component.css']
})
export class MProcessedRequestsComponent implements OnInit {
  
  requests: object;

  constructor(private requestData:RequestService) { }

  ngOnInit() {

    this.requestData.getAllNonPendingRequests().subscribe(data => {
      this.requests = data;
      console.log(this.requests);
      console.log("Non-Pending requests have been loaded");

    });

  }

}

import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-m-pending-requests',
  templateUrl: './m-pending-requests.component.html',
  styleUrls: ['./m-pending-requests.component.css']
})
export class MPendingRequestsComponent implements OnInit {

  requests: object;

  constructor(private requestData:RequestService) { }

  ngOnInit() {

    this.requestData.getAllPendingRequests().subscribe(data => {
      this.requests = data;
      console.log(this.requests);
      console.log("Pending requests have been loaded");

    });

  }

}

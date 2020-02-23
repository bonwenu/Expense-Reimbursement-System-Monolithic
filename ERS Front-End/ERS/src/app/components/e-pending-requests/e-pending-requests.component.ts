import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-e-pending-requests',
  templateUrl: './e-pending-requests.component.html',
  styleUrls: ['./e-pending-requests.component.css']
})
export class EPendingRequestsComponent implements OnInit {

  requests: object;

  constructor(private router: Router, private requestData: RequestService) { }

  ngOnInit() {
    console.log(sessionStorage.getItem("workerId"));
    this.requestData.getPendingRequestsById(Number(sessionStorage.getItem("workerId"))).subscribe(data => {
      this.requests = data;
      console.log("Pending requests have been loaded");
    
  });
    
}

  back() {
    if(sessionStorage.getItem("title") === "Manager") {
      this.router.navigateByUrl("mHome");
    } 
    else {
      this.router.navigateByUrl("eHome");
    }
  }

}

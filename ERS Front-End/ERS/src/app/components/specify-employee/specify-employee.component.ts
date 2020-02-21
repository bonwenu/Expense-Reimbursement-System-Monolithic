import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-specify-employee',
  templateUrl: './specify-employee.component.html',
  styleUrls: ['./specify-employee.component.css']
})
export class SpecifyEmployeeComponent implements OnInit {

  pRequests: object;
  nPRequests: object;

  constructor(private requestData:RequestService) { }

  ngOnInit() {
    // Make it to button press
    this.requestData.getPendingRequestsById(4).subscribe(data => {
      this.pRequests = data;
      console.log(this.pRequests);
      console.log("Specified employee pending requests have been loaded");
    });
    this.requestData.getNonPendingRequestsById(4).subscribe(data => {
      this.nPRequests = data;
      console.log(this.nPRequests);
      console.log("Specified employee non-pending requests have been loaded");
    });
  }

}

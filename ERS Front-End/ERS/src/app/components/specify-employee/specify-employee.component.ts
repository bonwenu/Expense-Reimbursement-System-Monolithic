import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specify-employee',
  templateUrl: './specify-employee.component.html',
  styleUrls: ['./specify-employee.component.css']
})
export class SpecifyEmployeeComponent implements OnInit {

  showTable: boolean = false;
  pRequests: object;
  nPRequests: object;
  id:number;

  constructor(private requestData:RequestService, private router: Router) { }

  ngOnInit() {
    

  }

  getData() {
    this.showTable = true;

   // Make it to button press
    this.requestData.getPendingRequestsById(this.id).subscribe(data => {
      this.pRequests = data;
      console.log(this.pRequests);
      console.log("Specified employee pending requests have been loaded");
    });
    this.requestData.getNonPendingRequestsById(this.id).subscribe(data => {
      this.nPRequests = data;
      console.log(this.nPRequests);
      console.log("Specified employee non-pending requests have been loaded");
    });

  }

}

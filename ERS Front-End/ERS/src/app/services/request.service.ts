import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requests } from 'src/Requests';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8080/ERS/api/requests";

  getAllRequests(): Observable<Requests[]> {

    return this.http.get<Requests[]>(this.baseUrl);

  }

  getAllPendingRequests(): Observable<Requests[]> {

    return this.http.get<Requests[]>(this.baseUrl+"/all-pending");

  }

  getAllNonPendingRequests(): Observable<Requests[]> {

    return this.http.get<Requests[]>(this.baseUrl+"/all-non-pending");

  }

  getNonPendingRequestsById(id:number): Observable<Requests[]> {

    return this.http.get<Requests[]>(this.baseUrl+"/non-pending/"+id);

  }

  getPendingRequestsById(id:number): Observable<Requests[]> {

    return this.http.get<Requests[]>(this.baseUrl+"/pending/"+id);

  }

  createRequest(employee: Requests) {
    
    return this.http.post<Requests[]>(this.baseUrl, employee).subscribe(data => {console.log ("Request created.")});

  }

  updateRequest(r: Requests) {
    return this.http.put(this.baseUrl, r);
  }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from 'src/Employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8080/ERS/api/workers";

  getAllEmployees(): Observable<Employees[]> {

    return this.http.get<Employees[]>(this.baseUrl);

  }
}

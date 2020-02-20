import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  
  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {

    return this.http.get<Employee[]>('http://localhost:8080/ERS/api/workers');

  }
  
}

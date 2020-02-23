import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getEmployeeById(id:number): Observable<Employees[]> {

    return this.http.get<Employees[]>(this.baseUrl+"/"+id);

  }

  getEmployeeNameById(id:number) {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get(this.baseUrl+"/name/"+id, {headers, responseType: 'text'});
  }
  

  updateEmployee(employee: Employees) {
    return this.http.put(this.baseUrl, employee);
  }
}

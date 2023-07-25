import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // private apiServerUrl= environment.apiBaseUrl;
  private apiServerUrl='http://localhost:8080'
  constructor(private httpclient:HttpClient) { }

  public getEmployee():Observable<Employee[]>{
    return this.httpclient.get<Employee[]>(`${this.apiServerUrl}/employee/all`)
  }


  public addEmployee(employee:Employee):Observable<Employee>{
    return this.httpclient.post<Employee>(`${this.apiServerUrl}/employee/add`,employee)
  }

  public updateEmployee(employee:Employee):Observable<Employee>{
    return this.httpclient.put<Employee>(`${this.apiServerUrl}/employee/update`,employee)
  }


  public deleteEmployee(employeeid:number):Observable<void>{
    return this.httpclient.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeid}`)
  }











}

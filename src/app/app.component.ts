import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
  public employees:Employee[];
  newEmployee: Employee = {
    id: 0,
    name: '',
    email: '',
    jobTitle: '',
    phone: '',
    imageUrl: '',
    employeeCode: ''
  };

  constructor(private employeeservice:EmployeeService) { }
  ngOnInit(){
    this.getEmployees();
    this.addEmployee();
  }

  public getEmployees():void{
this.employeeservice.getEmployee().subscribe(
(response:Employee[])=>{
  this.employees=response;
},
(error:HttpErrorResponse)=>{
  alert(error.message);
}
);
  }



  

  addEmployee() {
    this.newEmployee.id = this.employees.length + 1;
    this.employees.push({ ...this.newEmployee });
    this.clearForm();
  }

  // updateEmployee(updatedEmployee: Employee) {
  //   const index = this.employees.findIndex(e => e.id === updatedEmployee.id);
  //   if (index !== -1) {
  //     this.employees[index] = { ...updatedEmployee };
  //   }
  // }

  // deleteEmployee(id: number) {
  //   this.employees = this.employees.filter(e => e.id !== id);
  // }

  clearForm() {
    this.newEmployee = {
      id: 0,
      name: '',
      email: '',
      jobTitle: '',
      phone: '',
      imageUrl: '',
      employeeCode: ''
    };









  }



}

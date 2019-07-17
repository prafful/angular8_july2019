import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  getAllEmployees(){
   return  this.http.get("	http://dummy.restapiexample.com/api/v1/employees")
  }

  getEmployeeById(employeeId){
    return this.http.get("http://dummy.restapiexample.com/api/v1/employee/" + employeeId)
  }

  updateEmployeeById(id, employee){
    return this.http.put("	http://dummy.restapiexample.com/api/v1/update/"+id, employee )
  }

  deleteEmployeeById(employeeId){
    return this.http.delete("http://dummy.restapiexample.com/api/v1/delete/" + employeeId)
  }

  createEmployee(employee){
    return this.http.post("http://dummy.restapiexample.com/api/v1/create", employee)
  }


}

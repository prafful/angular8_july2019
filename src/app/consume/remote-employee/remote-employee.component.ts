import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from "../../service/employee-service.service";

@Component({
  selector: 'cts-remote-employee',
  templateUrl: './remote-employee.component.html',
  styleUrls: ['./remote-employee.component.css']
})
export class RemoteEmployeeComponent implements OnInit {

  allEmployees:any
  selectedEmployee: any
  selected = 0
  constructor(private empService:EmployeeServiceService) { }

  getAllEmployees = function(){
    this.empService.getAllEmployees().subscribe((response)=>{
      console.log(response);
      console.log("Lenght: " + Object.keys(response).length)
      this.allEmployees = response
    })
  }

  ngOnInit() {
    this.getAllEmployees()
  }

  viewEmployee = function(selectedEmployee){
    this.selected = this.allEmployees[selectedEmployee].id
    this.empService.getEmployeeById(this.selected).subscribe((response)=>{
      console.log(response);
      this.selectedEmployee = response.employee_name
    })
  }

  deleteEmployee = function(se){
    this.selected = this.allEmployees[se].id
    this.empService.deleteEmployeeById(this.selected).subscribe((response)=>{
      console.log(response);
      this.getAllEmployees()
    })
    //this.getAllEmployees()
  }

}

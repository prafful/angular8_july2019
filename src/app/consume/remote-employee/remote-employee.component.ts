import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from "../../service/employee-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'cts-remote-employee',
  templateUrl: './remote-employee.component.html',
  styleUrls: ['./remote-employee.component.css']
})
export class RemoteEmployeeComponent implements OnInit {

  allEmployees:any
  selectedEmployee: any
  selected = 0
  newEmployee:any = {}
  myname=""
  myage = 0
  mysalary = 0
  myid = 0

  constructor(private empService:EmployeeServiceService, private router:Router) { }

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

  addEmployee = function(tempEmployee){
    console.log(tempEmployee.value);
    this.newEmployee  = tempEmployee.value
    /* this.newEmployee = {
                  "name":"praful",
                  "salary":"1234",
                  "age":"88"
                }
 */    this.empService.createEmployee(this.newEmployee).subscribe((response)=>{
      console.log(response);
      this.getAllEmployees()
    })
  }

  updateEmployee = function(selectedEmployee){
    this.selected = this.allEmployees[selectedEmployee].id
    this.empService.getEmployeeById(this.selected).subscribe((response)=>{
      console.log(response);
      this.myname = response.employee_name
      this.myage = response.employee_age
      this.mysalary = response.employee_salary
      this.myid = response.id
    })
  }

  updateEmployeeNow = function(){
   this.newEmployee = {
                  "name":this.myname,
                  "salary":this.mysalary,
                  "age":this.myage
                }
      console.log(this.newEmployee);          
      this.empService.updateEmployeeById(this.myid, this.newEmployee).subscribe((response)=>{
        console.log(response);
        this.getAllEmployees()
      })          
  
      }
 
      viewInSPA = function(selectedId){
        this.selected = this.allEmployees[selectedId].id
        this.router.navigate(['/viewemployee', this.selected ])    

      }
  }



















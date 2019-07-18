import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'cts-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  receivedID = 0
  employee:any
  constructor(  private activeRoute:ActivatedRoute, private employeeService:EmployeeServiceService, private router:Router ) { }

  ngOnInit() {
    console.log(this.activeRoute);
    this.receivedID = this.activeRoute.snapshot.params.empid
    console.log(this.activeRoute.snapshot.paramMap.get("empid"));
    this.employeeService.getEmployeeById(this.receivedID).subscribe((response)=>{
      console.log(response);
      this.employee = response
    })
  }
  viewAll = function(){
      this.router.navigate(['/employee'])
  }

}

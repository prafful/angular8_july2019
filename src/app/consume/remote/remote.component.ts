import { Component, OnInit } from '@angular/core';
import { RemoteServiceService } from 'src/app/service/remote-service.service';

@Component({
  selector: 'cts-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  constructor(private remoteService: RemoteServiceService) { }

  remoteUsers:any

scores = [25, 35, 44, 88, 40, 9, 7]
friends =["Ola", "Uber", "Eats", "Swiggy"]


  ngOnInit() {
    this.remoteService.getRemoteUsers()
                        .subscribe(data => {
                            this.remoteUsers = data
                            console.log(this.remoteUsers);
    })
    
  }
/* demoFunction = function(parameter){
  //some line 1
  //statement 2
  return parameter
}
demoFunction2 = (parameter) =>{
  //some line 1
  //statement 2
  return parameter
}
demoFunction3 = (parameter) =>{ parameter }

 */
/* 
  receivedData = function(received){
    console.log(received);
    this.remoteUsers = received
    console.log(this.remoteUsers)
  }
 */
}

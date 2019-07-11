import { Component } from '@angular/core';

@Component({
  selector: 'praffuldaga',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class RootComponent {
  title = 'India First';
  name = "Prafful Daga"
  Orange = 8

  sayHello(){
    return "Hello from method!"  
  }

  callSayHello(){
    return this.sayHello()
  }
}

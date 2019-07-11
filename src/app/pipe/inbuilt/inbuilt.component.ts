import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-inbuilt',
  templateUrl: './inbuilt.component.html',
  styleUrls: ['./inbuilt.component.css']
})
export class InbuiltComponent implements OnInit {

  salary = 888888888
  friend = "Uber"
  currentDate = new Date()

  constructor() { }

  ngOnInit() {
  }

}

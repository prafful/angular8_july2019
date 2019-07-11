import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  users = []

  scoreForm
  fullname =""
  //score=8
  city=""

  submitForm = function(sf){
    console.log(sf);
    console.log(sf.value);
    console.log(sf.invalid)
    this.users.push(sf.value)
    console.log(this.users);
  }

  constructor() { }

  ngOnInit() {
  }

}

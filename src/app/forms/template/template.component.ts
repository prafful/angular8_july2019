import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'cts-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  users = []

  scoreForm
  fullname =""
  score=8
  city=""
  datevalue = new Date()
  rating = 0

  submitForm = function(sf){
    console.log(sf);
    console.log(sf.value);
    console.log(sf.invalid)
    this.users.push(sf.value)
    console.log(this.users);
  }

  videoURL = function(cur){
    console.log(cur);
    console.log(this.users[0].myfullname);
    return this.users[0].myfullname
  }

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}

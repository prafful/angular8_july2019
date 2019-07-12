import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cts-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  scoreForm:any

  constructor() { }
  
  submitForm = function(sf){
    console.log(sf);
    console.log(sf.value);
  }

  ngOnInit() {
    this.scoreForm = new FormGroup({
      fname:new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      score:new FormControl(5 ,this.customValidator),
      city: new FormControl()
    })
  }

  customValidator = function(controlInstance){
    console.log("-----------------------");
    console.log(controlInstance)
    if(controlInstance.value < 5){
      return {score: true}
    }
  }


}

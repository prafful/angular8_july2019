import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-ngfor-component',
  templateUrl: './ngfor-component.component.html',
  styleUrls: ['./ngfor-component.component.css']
})
export class NgforComponentComponent implements OnInit {
  display = false
  name = "bengaluru"
score = 20
scores = [25, 35, 44, 88, 40]
friends =["Ola", "Uber", "Eats", "Swiggy"]
//array of JSON objects
friendScores =[
  {
    "name":"Ola",
    "score":21
  },
  {
    "name":"Uber",
    "score":31
  },
  {
    "name":"Zoom",
    "score":1
  }
]
friendClicked(ct){
console.log("Hello from " + this.friends[ct])
}

getMe = function(c){
console.log(this.friendScores[c].name + " " + this.friendScores[c].score);
}

  constructor() { }

  ngOnInit() {
  }

}

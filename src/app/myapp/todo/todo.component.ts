import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo = ""
  tasks = ["Task 1", "Task 2", "Task 3"]

  addTask = function(){
    this.tasks.push(this.todo)
    console.log(this.tasks);
    this.todo = ""
  }

  deleteTask = function(ct){
    this.tasks.splice(ct, 1)
  }

  constructor() { }

  ngOnInit() {
  }

}

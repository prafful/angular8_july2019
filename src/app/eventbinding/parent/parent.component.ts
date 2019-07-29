import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name = "Angular"

  receivedUpdatedName = function(e){
    this.name = e
  }

  constructor() { }

  ngOnInit() {
  }

}

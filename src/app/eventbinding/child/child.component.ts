import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cts-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() sendme

  @Output() updatedName = new EventEmitter()

  broadcastName = function(e){
    console.log(e);
    this.updatedName.emit(this.sendme)
  }

  constructor() { }

  ngOnInit() {
  }

}

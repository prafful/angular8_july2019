  import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'cts-animatetext',
  templateUrl: './animatetext.component.html',
  styleUrls: ['./animatetext.component.css'],
  animations:[
    trigger('animateText', [
                state('small', style({
                    color:'red',
                    transform:'scale(1)',
                    letterSpacing:"8px"
                })), 
                state('big', style({
                  color:'blue',
                  transform:'scale(3)',
                  letterSpacing:"0.2px"
                })),
              transition('small <=> big', animate('500ms ease-in'))
              ] )
  ]
})
export class AnimatetextComponent implements OnInit {
  currentState = 'small'
  doAnimation = function(){
    this.currentState = this.currentState === 'small'?'big':'small' 
    console.log(this.currentState);
  }

  constructor() { }

  ngOnInit() {
  }

}

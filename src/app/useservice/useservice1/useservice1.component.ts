import { Component, OnInit } from '@angular/core';
import { CustomService } from '../../service/custom.service';

@Component({
  selector: 'cts-useservice1',
  templateUrl: './useservice1.component.html',
  styleUrls: ['./useservice1.component.css']
})
export class Useservice1Component implements OnInit {

  constructor(private custom_service:CustomService) { }

  ngOnInit() {
    console.log(this.custom_service.getPi())
    //console.log(this.custom_service.pi)
    this.custom_service.putMessage()
    console.log(this.custom_service.getScores());
    this.custom_service.putScores(3)
    console.log(this.custom_service.getScores());
    

  }

}

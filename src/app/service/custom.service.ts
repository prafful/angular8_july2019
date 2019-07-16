import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CustomService {

  private  scores = [1,2]

   private pi = 3.14

   getScores(){
     return this.scores
   }

   putScores(score){
     this.scores.push(score)
   }

   getPi(){
     return this.pi
   }

   putMessage(){
     console.log("Command Received!!!")
   }

  constructor() { }
}

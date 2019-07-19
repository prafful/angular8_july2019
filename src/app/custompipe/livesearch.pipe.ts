import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'livesearch'
})
export class LivesearchPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(!args[0]){
      return value
    }
    return value.filter((singleValue)=>{
      console.log(singleValue);
      console.log(singleValue.name.toLowerCase());
      console.log(args[0].toLowerCase());
      return singleValue.name.toLowerCase().includes(args[0].toLowerCase())
      
    })
  }

}

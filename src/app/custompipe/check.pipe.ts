import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'check'
})
export class CheckPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value >100) {
      return "Hundred"
    }  else{
      return "Bye Bye"
    }
  }

}

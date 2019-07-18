import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortString'
})
export class SortStringPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    console.log(value);
    if(args == "asc"){
      return value.sort()
    }
    if(args == "dsc"){
      return value.sort().reverse()
    }
    return value.sort()
  }

}

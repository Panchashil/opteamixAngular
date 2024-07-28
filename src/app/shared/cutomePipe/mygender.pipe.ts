import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mygender',
  standalone: true
})
export class MygenderPipe implements PipeTransform {

  transform(value:any,gender:string) {
    if(gender.toLocaleLowerCase()==="male"){
      return "Mr."+value
    }else{
      return "Miss."+value
    }
  }

}

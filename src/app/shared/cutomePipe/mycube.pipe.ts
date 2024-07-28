import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycube',
  standalone: true
})
export class MycubePipe implements PipeTransform {

  transform(val:any): unknown {
    return val**3;
  }

}

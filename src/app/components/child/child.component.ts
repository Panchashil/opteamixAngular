import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  
@Input() parentData:any

@Output()  eventObj =new EventEmitter() 

getData(val: any) {
    // window.alert(val);
    this.eventObj.emit(val);
}

}

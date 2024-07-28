import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  pdata: string = '';
  childData:any;
  getData(val: any) {
    //  window.alert(val);
    this.pdata = val;
  }

}

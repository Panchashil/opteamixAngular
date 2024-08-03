import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../state/app.store';
import { selectCount } from '../../state/counter/counter.selector';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { decremnt, increment, reset } from '../../state/counter/counter.action';

@Component({
  selector: 'app-datalist',
  standalone: true,
  imports: [CommonModule,MatButtonModule],
  templateUrl: './datalist.component.html',
  styleUrl: './datalist.component.css'
})
export class DatalistComponent {
 
  count:Observable<number>;
 
  constructor(private store:Store<AppState>){
    this.count= this.store.select(selectCount);
  }
  incrementCounter(option:string){
    if(option==="inc"){
      this.store.dispatch(increment());
    }else if(option==="dec"){
     this.store.dispatch(decremnt())
    }else if(option==="reset"){
     this.store.dispatch(reset());
    }
    
  }
  
}

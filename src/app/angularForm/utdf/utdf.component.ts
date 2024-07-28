import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-utdf',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './utdf.component.html',
  styleUrl: './utdf.component.css'
})
export class UtdfComponent {
  username:any;
  userpass:any;
  useremail:any;
  term:any;

  getData(val:any){
        console.log(val);
  }
}

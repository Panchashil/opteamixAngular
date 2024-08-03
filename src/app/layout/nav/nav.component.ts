import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink,MatButtonModule,MatIconModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

constructor(private _router:Router){}

  signOut(){
    if(window.confirm("Are you sure to signout")){
       sessionStorage.clear();
       this._router.navigate(["/"]);
    }
  }
}

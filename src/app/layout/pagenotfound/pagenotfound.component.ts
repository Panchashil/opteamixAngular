import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import data from '../../shared/staticData/data';

@Component({
  selector: 'app-pagenotfound',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pagenotfound.component.html',
  styleUrl: './pagenotfound.component.css'
})
export class PagenotfoundComponent {
   
  pageNotFound:string=data.pageNotFound
}

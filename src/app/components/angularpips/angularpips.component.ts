import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycubePipe } from '../../shared/cutomePipe/mycube.pipe';
import { MygenderPipe } from '../../shared/cutomePipe/mygender.pipe';
@Component({
  selector: 'app-angularpips',
  standalone: true,
  imports: [CommonModule,MycubePipe,MygenderPipe],
  templateUrl: './angularpips.component.html',
  styleUrl: './angularpips.component.css'
})
export class AngularpipsComponent {
 msg:string="Good morning my dear friends, how are you all";
 employee:any={
  id:101,name:"Rajeev",post:"CEO",address:"Banluru"
 }
 dobj=new Date();

friends:any=[
  {name:"Anmol",gender:"male",address:"Pune"},
  {name:"Katuri",gender:"female",address:"Nagpur"},
  {name:"Vishal",gender:"male",address:"Mumbai"},
  {name:"Kalyani",gender:"female",address:"Mumbai"}
]

}

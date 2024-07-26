import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

  isCond: boolean = true;
  hasValue: boolean = true;
  courses: string[] = ["Html", "Css", "Bootstrap", "Javascript", "Angular"];

  selectedCourse: string = "Angular";

  myStyle = {
    fontSize: this.isCond ? "25px" : "30px",
    color: !this.isCond ? "Red" : "blue",
    backgroundColor: !this.isCond ? "green" : "aqua",
    textAlign: this.isCond ? "center" : "right"
  }
  myClass = {
    "txtprimary": this.isCond,
    "txtdanger": !this.isCond,
    "special": this.isCond
  }

}

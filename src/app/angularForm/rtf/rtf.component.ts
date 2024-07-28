import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule,FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-rtf',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './rtf.component.html',
  styleUrl: './rtf.component.css'
})
export class RtfComponent {
  
  userform:any;
  
  ngOnInit(){
     this.userform =new FormGroup({
      userName:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z]{3,20}$")]),
      userEmail:new FormControl("",[Validators.required,Validators.pattern("^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$")]),
      userPassword:new FormControl("",[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$")]),
      term:new FormControl("",[Validators.requiredTrue]),
     })
  }


}

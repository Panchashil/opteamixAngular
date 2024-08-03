import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbServiceService } from '../../shared/services/db-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  userid:string='';
  userpass:string='';
  userData = inject(DbServiceService);
 serverUserData:any;
 
constructor(private _router:Router){}

  signIn(){
    // console.log(this.userid,this.userpass);
    this.userData.getRecord("users").subscribe((res)=>{
      // console.log(res);
      this.serverUserData = res;
     let data = this.serverUserData.filter((val:any)=>{return val.uid===this.userid && val.pass===this.userpass});
     if(data.length > 0){
       sessionStorage.setItem("user",this.userid);
       this._router.navigate(['/maindashboard']);
     }else{
      window.alert("wrong credential");
      this.userid="";
      this.userpass="";
     }
    })
  }

}

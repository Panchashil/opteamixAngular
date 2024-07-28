import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  addition(num1:number,num2:number){
     return num1+num2;
  }
  subtraction(num1:number,num2:number){
     return num1-num2;
  }
  multiplication(num1:number,num2:number){
     return num1*num2;
  }
  division(num1:number,num2:number){
     return num1/num2;
  }
  
}

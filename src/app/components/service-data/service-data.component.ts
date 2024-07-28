import { Component, inject } from '@angular/core';
import { MyserviceService } from '../../shared/services/myservice.service';

@Component({
  selector: 'app-service-data',
  standalone: true,
  imports: [],
  templateUrl: './service-data.component.html',
  styleUrl: './service-data.component.css'
})
export class ServiceDataComponent {
     servData = inject(MyserviceService);  // dependency 
  // constructor(private servData:MyserviceService){}
    
  add = this.servData.addition(100,300);
  sub = this.servData.subtraction(500,300);
  mul = this.servData.multiplication(5,6);
  div = this.servData.addition(500,20);
  
}

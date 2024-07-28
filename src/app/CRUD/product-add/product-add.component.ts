import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbServiceService } from '../../shared/services/db-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {

  productData = inject(DbServiceService);
  
   pname:any;
   pcompany:any;
   pprice:any;
   address:any;
    
  constructor(private _router:Router){} 

   sendData(data:any){
     console.log(data);
     this.productData.addRecord("products",data).subscribe(()=>{
      window.alert("Product Added successfully");
      this._router.navigate(["/maindashboard/productdash"]);
     })
   }

}

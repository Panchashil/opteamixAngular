import { Component, inject } from '@angular/core';
import { DbServiceService } from '../../shared/services/db-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produst-dash',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './produst-dash.component.html',
  styleUrl: './produst-dash.component.css'
})
export class ProdustDashComponent {
  productArray: any;
  productData = inject(DbServiceService);

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.productData.getRecord("products").subscribe((res) => {
      // console.log(res);
      this.productArray = res
    })
  }

  deleteData(id: any) {
    if(window.confirm(`Are you sure to delete record with id ${id}`)){
      this.productData.deleteRecord("products", id).subscribe(() => {
        window.alert("product deleted successfully");
        this.fetchData();
      })
    }
   
  }
}

import { Component, inject ,TemplateRef } from '@angular/core';
import { DbServiceService } from '../../shared/services/db-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import data from '../../shared/staticData/data';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-produst-dash',
  standalone: true,
  imports: [CommonModule,RouterLink,CarouselModule,NgxPaginationModule],
  templateUrl: './produst-dash.component.html',
  styleUrl: './produst-dash.component.css'
})
export class ProdustDashComponent {
   dosa:string = data.dosa;
   jalebi:string = data.jalebi;
   samosa:string = data.samosa1;

   p:number =1;

  modalRef?: BsModalRef;
  productArray: any;
  productData = inject(DbServiceService);
  // modalService = inject(BsModalService);

  constructor(private modalService: BsModalService){}

  ngOnInit() {
    this.fetchData();
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template);
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

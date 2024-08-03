import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProdustDashComponent } from '../CRUD/produst-dash/produst-dash.component';

@NgModule({
  declarations: [ProdustDashComponent],
  imports: [
    CommonModule
  ],
})
export class AppModule { }

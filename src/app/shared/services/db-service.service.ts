import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  baseUrl:string="http://localhost:8888";
  constructor(private http:HttpClient) { }
   
  // get request 
     getRecord(tableName:any){
      return this.http.get(`${this.baseUrl}/${tableName}`); 
     }

  //delete request
  deleteRecord(tableName:any,id:any){
    return this.http.delete(`${this.baseUrl}/${tableName}/${id}`);
  }   

  //post request 
  addRecord(tableName:any,data:any){
  return this.http.post(`${this.baseUrl}/${tableName}`,data);
  }
  //get request for single user
  getSingleRecord(tableName:any,id:any){
    return this.http.get(`${this.baseUrl}/${tableName}/${id}`);
  }
  //updated request 
  updateRecord(tableName:any,id:any,data:any){
    return this.http.put(`${this.baseUrl}/${tableName}/${id}`,data);
  }

}

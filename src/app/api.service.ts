import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchBook=()=>
  {
    return this.http.get("http://localhost:8080/view")
  }

  addBook=(dataTosend:any)=>
  {
    return this.http.post("http://localhost:8080/entry",dataTosend)
  }
  searchBook=(value:any)=>{
    return this.http.post("http://localhost:8080/search",value)
  }
  deleteBook=(dataTosend:any)=>
  {
    return this.http.post("http://localhost:8080/delete",dataTosend)
  }
 
}

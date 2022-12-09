import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent {
  
  constructor(private api:ApiService){
    this.api.fetchBook().subscribe(
      (response:any)=>
      {
        this.data=response
      }
    )
  }
  data:any =[]

    
  

}
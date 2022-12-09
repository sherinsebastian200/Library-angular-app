import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  title=""
  data:any=[]
constructor(private api:ApiService){
api.fetchBook().subscribe(
  (generated:any)=>
  {
    this.data=generated
  }
)
}
  readValue=()=>
  {
    let data1:any={
    "title":this.title
    }
    console.log(data1)
    this.api.searchBook(data1).subscribe(
      (generated:any)=>{
        if(generated.length){
        this.data=generated
        console.log(generated)}else{
          alert("not found")
        }

      }
    )

  }

}
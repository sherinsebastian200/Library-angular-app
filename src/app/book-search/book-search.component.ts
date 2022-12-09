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
          alert("Book not found")
        }

      }
    )

  }
  deleteBtnClick=(id:any)=>
  {
    let data:any={"id":id}
    this.api.deleteBook(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("Book Deleted Successfully")
        } else {
          alert("can not delete")
        }
      }
    )
  }

}
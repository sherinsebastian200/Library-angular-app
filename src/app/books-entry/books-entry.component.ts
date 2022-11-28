import { Component } from '@angular/core';

@Component({
  selector: 'app-books-entry',
  templateUrl: './books-entry.component.html',
  styleUrls: ['./books-entry.component.css']
})
export class BooksEntryComponent {
  title=""
  image=""
  description=""

  bookEntry=()=>
  {
  let data:any={
  "title":this.title,
  "image":this.image,
  "description":this.description}
  console.log(data)
  }
  
  

  }



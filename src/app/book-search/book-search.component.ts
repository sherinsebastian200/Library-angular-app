import { Component } from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  booktitle=""
  bookSer=()=>
{
  let data:any={"booktitile":this.booktitle}
  console.log(data)
}

}

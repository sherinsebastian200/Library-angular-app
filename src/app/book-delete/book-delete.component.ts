import { Component } from '@angular/core';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent {
booktitle=""

bookDel=()=>
{
  let data:any={"booktitile":this.booktitle}
  console.log(data)
}
}

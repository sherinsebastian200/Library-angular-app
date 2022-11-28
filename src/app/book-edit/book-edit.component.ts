import { Component } from '@angular/core';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent {
  booktitle=""

  bookEdit=()=>
  {
    let data:any={"booktitile":this.booktitle}
    console.log(data)
  }
}

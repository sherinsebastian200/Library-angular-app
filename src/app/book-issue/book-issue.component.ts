import { Component } from '@angular/core';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent {
  name=""
  booktitle=""
  dateofissue=""
  membershipnumber=""

  bookIssue=()=>
  {
    let data:any={"name":this.name,"booktitle":this.booktitle,"dateofissue":this.dateofissue,"membershipnumber":this.membershipnumber}
    console.log(data)
  }


}

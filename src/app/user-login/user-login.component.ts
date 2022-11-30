import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  name=""
  password=""

  constructor(private route:Router){}
  
userLogin=()=>
{
  let data:any= {"name":this.name,"password":this.password}
  console.log(data)
  if (this.name=="admin" && this.password=="12345") {
    this.route.navigate(['/view'])
} else 
{
  alert("invalid credentials")
  
}

  }

}

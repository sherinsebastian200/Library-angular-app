import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  name=""
  aadhar=""
  address=""
  pincode=""
  dob=""
  email=""
  phone=""
  username=""
  password=""
  confirmpassword=""

  userReg=()=>
  {
    let data:any= {"name":this.name,
  "aadhar":this.aadhar,
  "address":this.address,
  "pincode":this.pincode,
  "dob":this.dob,
  "email":this.email,
  "phone":this.phone,
  "username":this.username,
  "password":this.password,
  "confirmpassword":this.confirmpassword
  }
  console.log(data)
}
  


}

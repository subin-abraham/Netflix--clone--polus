import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email:any;
  password:any;
constructor(private service :ServiceService){}
register(){
let emailId = this.email
let password = this.password
this.service.register(emailId,password)
}
}

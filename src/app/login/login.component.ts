import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  emailId: any;
  password: any;
  userName: any;
  constructor(private service: ServiceService) { }
  login() {
    this.service.login(this.emailId,this.password)
  }
}

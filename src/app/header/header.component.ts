import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  signin() {
    this.router.navigateByUrl('/signin');
  }
  headerStyle = 'blue';
  headerButtons = ['Button 1', 'Button 2'];
}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'cc-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  jbbData = null;
  isAuthenticated = false;
  welcomeMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.userIsLoggedIn()) {
      this.refreshFlags();
    }
  }

  refreshFlags() {
    if (localStorage.getItem('jbb-data')) {
      this.isAuthenticated = true;
      this.welcomeMessage = `Bienvenue`;
    }
  }

  login(formData) {
    this.authService.login(formData).subscribe({
      next: data => this.handleLoginSuccess(data),
      error: err => this.handleLoginFailure(err),
    });
  }

  handleLoginSuccess(data) {
    console.log('success', data);
    this.jbbData = data;
    this.refreshFlags();
    localStorage.setItem('jbb-data', JSON.stringify(data));
  }

  handleLoginFailure(error) {
  console.error('failure ', error);
  }
}

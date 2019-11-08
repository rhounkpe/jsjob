import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'cc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(formData) {
    this.authService.register(formData).subscribe({
      next: value => this.handleRegisterSuccess(value),
      error: err => this.handleRegisterFailure(err)
    });
  }

  handleRegisterSuccess(data) {
    console.log(`Success registering a new user: ${data}`);
    localStorage.setItem('jbb-data', JSON.stringify(data));
  }

  handleRegisterFailure(error) {
    console.log(`Fails to register new user: ${error}`);
  }
}

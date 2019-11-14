import { Component, OnInit } from '@angular/core';
import {CompanyAuthService} from '../../services/company/company.auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'cc-regiter-company',
  templateUrl: './regiter-company.component.html',
  styleUrls: ['./regiter-company.component.css']
})
export class RegiterCompanyComponent implements OnInit {
  private COMPANY_TOKEN = 'jsjobs-company-token';

  constructor(private companyAuthService: CompanyAuthService, private router: Router) { }

  ngOnInit() {
  }

  register(formData) {
    this.companyAuthService.register(formData).subscribe({
      next: value => this.handleRegistrationSuccess(value),
      error: err => this.handleRegistrationFailure(err)
    });
  }

  handleRegistrationSuccess(data) {
    console.log(`Success registering a new company: ${data}`);
    localStorage.setItem(this.COMPANY_TOKEN, JSON.stringify(data));
    this.router.navigate(['/company/auth/profile']);
  }

  handleRegistrationFailure(error) {
    console.error(`Fails to register new company: ${error.stack}`);
  }

}

import { Component, OnInit } from '@angular/core';
import {CompanyAuthService} from '../../../services/company/company.auth.service';

@Component({
  selector: 'cc-company-authentication',
  templateUrl: './company.authentication.component.html',
  styleUrls: ['./company.authentication.component.css']
})
export class CompanyAuthenticationComponent implements OnInit {

  companyToken = null;
  companyIsAuthenticated = false;
  companyWelcomeMessage = '';
  private COMPANY_TOKEN = 'jsjobs-company-token';

  constructor(private companyAuthService: CompanyAuthService) { }

  ngOnInit() {
    this.refreshFlags();
  }

  refreshFlags() {
    if (localStorage.getItem(this.COMPANY_TOKEN)) {
      this.companyIsAuthenticated = true;
      this.companyWelcomeMessage = 'Bienvenue company';
    }
  }

  login(formData) {
    this.companyAuthService.login(formData).subscribe({
      next: data => this.handleLoginSuccess(data),
      error: err => this.handleLoginFailure(err),
    });
  }

  logout(): void {

  }

  handleLoginSuccess(data) {

    this.companyToken = data;
    this.refreshFlags();
    localStorage.setItem(this.COMPANY_TOKEN, JSON.stringify(data));
  }

  handleLoginFailure(error) {
    console.error('failure ', error);
  }

}

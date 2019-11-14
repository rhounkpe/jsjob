import { Component, OnInit } from '@angular/core';
import {CompanyAuthService} from '../../services/company/company.auth.service';
import {JobService} from '../../services/job.service';

@Component({
  selector: 'cc-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  companyDecodedToken = null;
  companyJobs: any[] = [];
  private COMPANY_TOKEN = 'jsjobs-company-token';

  constructor(private companyAuthService: CompanyAuthService, private jobService: JobService) { }

  ngOnInit() {
    if (this.companyAuthService.companyIsLoggedIn()) {
      const token = JSON.parse(localStorage.getItem(this.COMPANY_TOKEN));
      this.companyDecodedToken = this.companyAuthService.decodeToken(token.token);

      if (this.companyDecodedToken) {
        this.loadCompanyJobs(this.companyDecodedToken);
      }
    }
  }

  loadCompanyJobs(company: any) {
    return this.jobService.getJobsByUser(company).subscribe({
      next: jobs => this.companyJobs = jobs,
      error: err => console.error(err)
    });
  }

}

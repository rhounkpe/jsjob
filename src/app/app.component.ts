import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {CompanyAuthService} from './services/company/company.auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jsjobs';

  constructor(private authService: AuthService, private companyAuthService: CompanyAuthService) {}
}

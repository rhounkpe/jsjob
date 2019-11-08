import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {JobService} from '../services/job.service';

@Component({
  selector: 'cc-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  decodedToken = null;
  isAdmin = false;

  userJobs: any[] = [];

  constructor(private authService: AuthService, private jobService: JobService) {
  }

  ngOnInit() {
    if (this.authService.userIsLoggedIn()) {
      const jbbToken = JSON.parse(localStorage.getItem('jbb-data'));
      this.decodedToken = this.authService.decodeToken(jbbToken.token);

      console.log(`Decoded token is: ${JSON.stringify(this.decodedToken)}`);

      if (this.decodedToken && this.decodedToken.role === 'admin') {
        this.isAdmin = true;
      }

      if (this.decodedToken && this.decodedToken.email) {
        // TODO: decodedToken is not a user. We need to handle this
        if (this.isAdmin) {
          this.jobService.getJobs().subscribe({
            next: jobs => this.userJobs = jobs
          });
        } else {
          this.loadUserAds(this.decodedToken);
        }
      }
    }
  }

  loadUserAds(user: any) {
    return this.jobService.getJobsByUser(user).subscribe({
        next: jobs => this.userJobs = jobs,
        error: err => console.error(err)
      }
    );
  }
}

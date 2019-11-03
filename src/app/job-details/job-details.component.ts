import { Component, OnInit } from '@angular/core';
import {JobService} from '../services/job.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'cc-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  jobDetails = null;
  error: null;
  errorMessage = '';

  constructor(private jobService: JobService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.jobService.getJobById(id)
      .subscribe({
        next: (data: any) => {
          this.handleServerResponse(data);
        },
        error: err => {
          this.handleError(err);
        }
      });
  }


  handleServerResponse(response) {
    if (response.success === true) {
      console.log('response.job = ', response);
      this.jobDetails = response.job;
    } else {
      this.errorMessage = response.message;
    }
  }


  handleError(error) {
    console.log('Handle Error: ', console.log(error.statusText));
    this.error = error;
  }
}

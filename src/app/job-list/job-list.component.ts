import { Component, OnInit } from '@angular/core';
import {JobService} from '../services/job.service';

@Component({
  selector: 'cc-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs: any[] = [];
  error = '';

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getJobs().subscribe({
      next: (jobs: any[]) => {
        this.jobs = jobs;
      },
      error: err => {
        console.error(err);
        this.error = err;
      },
      complete: () => console.log('Completed!')
    });
  }

}

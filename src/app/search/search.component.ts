import { Component, OnInit } from '@angular/core';
import {JobService} from '../services/job.service';

@Component({
  selector: 'cc-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  jobs = [];

  constructor(private jobService: JobService) { }

  ngOnInit() {
  }

  searchJobs(searchData) {
    this.jobService.searchJob(searchData).subscribe({
      next: (data: any[]) => this.jobs = data,
      error: err => console.log(err),
      complete: () => console.log(`Complete finding search criteria...`)
    });
  }
}

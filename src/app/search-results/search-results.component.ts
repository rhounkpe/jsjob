import { Component, OnInit } from '@angular/core';
import {JobService} from '../services/job.service';

@Component({
  selector: 'cc-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  jobs: any[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.searchResultSubject.subscribe(
      data => this.handleSearchResult(data)
    );
  }

  handleSearchResult(data) {
    this.jobs = data.jobs;
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private serviceUrl = 'data/jobs.json';
  jobs = [];
  jobsSubject = new Subject();

  constructor(private http: HttpClient) { }

  getJobs(): Observable<any> {
    return this.http.get(this.serviceUrl).pipe(
      tap((data: any[]) => console.log(data))
    );
  }

  addJob(jobData) {
    jobData.id = Date.now();

    return this.jobsSubject.next(jobData);
  }
}

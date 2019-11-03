import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private BASE_URL = 'http://localhost:4201';
  BASE_URL_PREFIX = 'api';
  jobs: any[] = []; // récupère les jobs créés par notre formulaire.
  jobsSubject = new Subject();

  constructor(private http: HttpClient) {
  }

  getJobs(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/${this.BASE_URL_PREFIX}/jobs`)
      .pipe(
        map((res: any[]) => res)
      );
  }

  getJobById(id) {
    return this.http.get(`${this.BASE_URL}/${this.BASE_URL_PREFIX}/jobs/${id}`)
      .pipe(
        tap(job => console.log(job)),
      );
  }

  addJob(jobData) {
    jobData.id = Date.now();
    return this.http.post(`${this.BASE_URL}/${this.BASE_URL_PREFIX}/jobs`, jobData).pipe(
      tap(res => console.log(res))
    );
  }
}

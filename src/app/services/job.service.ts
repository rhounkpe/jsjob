import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, Subject} from 'rxjs';
import {filter, map, tap} from 'rxjs/operators';
import {withIdentifier} from 'codelyzer/util/astQuery';
import {AuthService} from './auth.service';
import {Data} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private BASE_URL = 'http://localhost:4201';
  BASE_URL_PREFIX = 'api';
  jobs: any[] = []; // récupère les jobs créés par notre formulaire.

  jobsSubject = new Subject();

  searchResultSubject = new Subject();

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  getJobs(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/${this.BASE_URL_PREFIX}/jobs`)
      .pipe(
        map((res: any[]) => res)
      );
  }

  getJobsByUser(user: any): Observable<any> {
    return this.http.get(`${this.BASE_URL}/${this.BASE_URL_PREFIX}/jobs/${user.email}`)
      .pipe(
        tap(data => console.log(`List des annonces de cet utilisateur: ${JSON.stringify(data)}`))
      );
  }


  getJobById(id) {
    return this.http.get(`${this.BASE_URL}/${this.BASE_URL_PREFIX}/jobs/${id}`)
      .pipe(
        tap(job => console.log(job)),
      );
  }

  addJob(jobData: any, token) {
    const httpOptions: HttpHeaders = this.authService.addAuthorizationHeader(token);
    jobData.id = Date.now();

    return this.http.post(`${this.BASE_URL}/${this.BASE_URL_PREFIX}/jobs`, jobData, { headers: httpOptions }).pipe(
      tap(res => this.jobsSubject.next(res))
    );
  }

  searchJob(criteria) {
    console.log(criteria);
    return this.http.get(`${this.BASE_URL}/${this.BASE_URL_PREFIX}/search/${criteria.term}/${criteria.place}`)
      .pipe(
        tap(res => this.searchResultSubject.next(res))
      );
  }
}

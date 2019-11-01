import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private serviceUrl = 'data/jobs.json';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<any> {
    return this.http.get(this.serviceUrl).pipe(
      tap((data: any[]) => console.log(data))
    );
  }
}

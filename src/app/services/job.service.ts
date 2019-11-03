import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  initialJobs: any[] = []; // récupère ce qui est contenu dans le fichier /data/jobs.json
  private serviceUrl = 'data/jobs.json';
  jobs: any[] = []; // récupère les jobs créés par notre formulaire.
  jobsSubject = new Subject();

  constructor(private http: HttpClient) { }

  getJobs(): Observable<any> {
    // On a à la fois des données de jobs.json + des données ajoutées par notre formulaire
    // on a pas encore récupéré de données depuis jobs.json
    // on a des jobs récupéré de jobs.json
    if (this.jobs.length > 0 && this.initialJobs.length > 0) {
      return of([...this.jobs, ...this.initialJobs]);
    } else if (this.jobs.length > 0 && this.initialJobs.length === 0) {
      console.log('case else if');

      return this.http.get(this.serviceUrl).pipe(
        map((res: any[]) => res),
        tap((data: any[]) => {
          this.initialJobs = data;
          this.jobs = [...this.jobs, ...this.initialJobs];
        })
      );
    } else {
      console.log('Case else');
      return this.http.get(this.serviceUrl)
        .pipe(
          map((res: any[]) => res),
          tap((data: any[]) => this.initialJobs = data)
        );
    }
  }

  addJob(jobData) {
    jobData.id = Date.now();

    this.jobs = [jobData, ...this.jobs];

    return this.jobsSubject.next(jobData);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = 'http://localhost:4201';
  BASE_URL_PREFIX = 'auth';
  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(`${this.BASE_URL}/${this.BASE_URL_PREFIX}/login`, credentials)
      .pipe(
        tap(data => console.log(`Received from auth.service: ${data}`))
    );
  }

  userIsLoggedIn() {
    return localStorage.getItem('jbb-data');
  }

  logOut() {
    localStorage.removeItem('jbb-data');
  }
}


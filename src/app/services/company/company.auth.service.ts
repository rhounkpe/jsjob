import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

import * as jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class CompanyAuthService {
  private BASE_URL = 'http://localhost:4201';
  private BASE_URL_PREFIX = 'company/auth';
  private COMPANY_TOKEN = 'jsjobs-company-token';

  constructor(private http: HttpClient) {}

  login(credentials): Observable<any> {
    return this.http.post(`${this.BASE_URL}/${this.BASE_URL_PREFIX}/login`, credentials)
      .pipe(
        tap(data => console.log(`Received from auth.service: ${data}`))
      );
  }

  companyIsLoggedIn(): boolean {
    return !!localStorage.getItem(this.COMPANY_TOKEN);
  }

  logout(): void {
    localStorage.removeItem(this.COMPANY_TOKEN);
  }

  register(credentials) {
    return this.http.post(`${this.BASE_URL}/${this.BASE_URL_PREFIX}/register`, credentials)
      .pipe(
        tap(data => console.log(`Registering credentials: ${credentials}`))
      );
  }

  addAuthorizationHeader(token: string) {
    return new HttpHeaders({
      Authorization: ['Bearer ' + token]
    });
  }

  decodeToken(token) {
    return jwtDecode(token);
  }
}

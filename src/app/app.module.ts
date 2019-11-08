import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { JobListComponent } from './job-list/job-list.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {JobService} from './services/job.service';
import { JobAddFormComponent } from './job-add-form/job-add-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DaysAgoPipe } from './pipes/days-ago.pipe';
import { HomeComponent } from './home/home.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import {RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ToShortDatePipe } from './pipes/to-short-date.pipe';
import { CurrencyToSymbolPipe } from './pipes/currency-to-symbol.pipe';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import {AuthService} from './services/auth.service';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'jobs/add', component: JobAddFormComponent },
  { path: 'jobs/:id', component: JobDetailsComponent },
  { path: 'jobs', component: JobListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'auth/login', component: AuthenticationComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/profile', component: UserProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    JobListComponent,
    JobAddFormComponent,
    DaysAgoPipe,
    HomeComponent,
    JobDetailsComponent,
    AboutComponent,
    ToShortDatePipe,
    CurrencyToSymbolPipe,
    SearchResultsComponent,
    AuthenticationComponent,
    RegisterComponent,
    UserProfileComponent
  ],
  imports: [
    RouterModule,
    NgbModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [JobService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

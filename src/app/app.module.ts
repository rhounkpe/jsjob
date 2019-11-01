import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { JobListComponent } from './job-list/job-list.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {JobService} from './services/job.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    JobListComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }

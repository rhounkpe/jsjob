import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAuthenticationComponent } from './authentication.component';

describe('AuthenticationComponent', () => {
  let component: CompanyAuthenticationComponent;
  let fixture: ComponentFixture<CompanyAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

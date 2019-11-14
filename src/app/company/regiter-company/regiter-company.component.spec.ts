import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiterCompanyComponent } from './regiter-company.component';

describe('RegiterCompanyComponent', () => {
  let component: RegiterCompanyComponent;
  let fixture: ComponentFixture<RegiterCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiterCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegiterCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

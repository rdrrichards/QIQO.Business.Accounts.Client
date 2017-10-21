import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListItem, MatList, MatRipple } from '@angular/material';

import { CompanyComponent } from './company.component';
import { RouterLinkStubDirective } from '../testing/router-stubs';
import { CompanyService } from '../services/company.service';
import { HttpClient } from '@angular/common/http';

describe('CompanyComponent', () => {
  let component: CompanyComponent;
  let fixture: ComponentFixture<CompanyComponent>;
  const companyService = new CompanyService(new HttpClient(null));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyComponent, RouterLinkStubDirective, MatListItem, MatList, MatRipple ],
      providers: [ { provide: CompanyService, useValue: companyService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

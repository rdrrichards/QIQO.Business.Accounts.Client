import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatRipple } from '@angular/material/core';
import { MatListItem, MatList, MatNavList } from '@angular/material/list';

import { CompanyComponent } from './company.component';
import { RouterLinkStubDirective } from '../testing/router-stubs.spec';
import { CompanyService } from '../services/company.service';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';

describe('CompanyComponent', () => {
  let component: CompanyComponent;
  let fixture: ComponentFixture<CompanyComponent>;
  const companyService = new CompanyService(
    new HttpClient({
      handle: (req: HttpRequest<any>): Observable<HttpEvent<any>> => {
        return of(<HttpEvent<any>>{});
      }
    })
  );

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          CompanyComponent,
          RouterLinkStubDirective,
          MatListItem,
          MatList, MatNavList,
          MatRipple
        ],
        providers: [{ provide: CompanyService, useValue: companyService }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should be return void', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });
});

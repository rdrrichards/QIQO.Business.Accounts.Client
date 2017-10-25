import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListItem, MatList, MatRipple } from '@angular/material';

import { CompanyComponent } from './company.component';
import { RouterLinkStubDirective } from '../testing/router-stubs.spec';
import { CompanyService } from '../services/company.service';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('CompanyComponent', () => {
  let component: CompanyComponent;
  let fixture: ComponentFixture<CompanyComponent>;
  const companyService = new CompanyService(
    new HttpClient({
      handle: (req: HttpRequest<any>): Observable<HttpEvent<any>> => {
        return Observable.of(<HttpEvent<any>>{});
      }
    })
  );

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [
          CompanyComponent,
          RouterLinkStubDirective,
          MatListItem,
          MatList,
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

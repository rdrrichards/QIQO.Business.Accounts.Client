import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountListComponent } from './account-list.component';
import {
  MatTableModule,
  MatPaginatorModule,
  MatGridListModule,
  MatListModule,
  MatCardModule
} from '@angular/material';
// import { DataSource } from '@angular/cdk/table';

import { AccountService } from '../services/account.service';
import {
  ActivatedRoute,
  ActivatedRouteStub,
  RouterLinkStubDirective
} from '../testing/router-stubs';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subscription } from 'rxjs/Subscription';

describe('AccountListComponent', () => {
  let component: AccountListComponent;
  let fixture: ComponentFixture<AccountListComponent>;
  const accountServiceStub = new AccountService(
    new HttpClient({
      handle: (req: HttpRequest<any>): Observable<HttpEvent<any>> => {
        return Observable.of(<HttpEvent<any>>{});
      }
    })
  );
  const actvatedRouteStub = new ActivatedRouteStub();

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AccountListComponent, RouterLinkStubDirective],
        providers: [
          { provide: AccountService, useValue: accountServiceStub },
          { provide: ActivatedRoute, useValue: actvatedRouteStub }
        ],
        schemas: [NO_ERRORS_SCHEMA],
        imports: [MatTableModule, MatPaginatorModule]
      }).compileComponents();
      const spy = spyOn(
        accountServiceStub,
        'getAccountsByCompany'
      ).and.callThrough();
      // const spay = spyOn(actvatedRouteStub, 'params').and.callThrough();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountListComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should return void', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('ngOnDestroy should return void', () => {
    component.paramSubscription = new Subscription();
    expect(component.ngOnDestroy()).toBeUndefined();
  });
});

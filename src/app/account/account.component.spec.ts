import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatRippleModule } from '@angular/material/core';
import { AccountService } from '../services/account.service';
import { ActivatedRoute, ActivatedRouteStub } from '../tester/router-stubs.spec';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AccountComponent } from './account.component';

import { of } from 'rxjs';
import { IAccount } from '../models/account';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  const actvatedRouteStub = new ActivatedRouteStub();
  const account: IAccount = {
    accountKey: 0,
    companyKey: 0,
    accountCode: '',
    accountName: '',
    accountDesc: '',
    accountDBA: '',
    accountStartDate: new Date(),
    accountEndDate: new Date(),
    addresses: [],
    accountAttributes: [],
    employees: [],
    feeSchedules: []
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ AccountComponent ],
        providers: [ AccountService,
          { provide: ActivatedRoute, useValue: actvatedRouteStub }
        ],
        imports: [ MatCardModule, MatButtonModule, MatRippleModule, HttpClientModule, HttpClientTestingModule ]
      }).compileComponents();

      fixture = TestBed.createComponent(AccountComponent);
      component = fixture.componentInstance;

      const accountServiceStub = fixture.debugElement.injector.get(AccountService);
      const spy = spyOn(accountServiceStub, 'getAccount').and.returnValue(of(account));
    })
  );

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should return void', () => {
    expect(component.ngOnInit()).toBeUndefined();
  });

  it('goBack should return void', () => {
    expect(component.goBack()).toBeUndefined();
  });
});

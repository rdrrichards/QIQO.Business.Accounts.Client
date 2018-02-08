import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule } from '@angular/material';
import { AccountService } from '../services/account.service';
import { ActivatedRoute, ActivatedRouteStub, RouterLinkStubDirective } from '../testing/router-stubs.spec';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AccountListComponent } from './account-list.component';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subscription } from 'rxjs/Subscription';

describe('AccountListComponent', () => {
  let component: AccountListComponent;
  let fixture: ComponentFixture<AccountListComponent>;
  const actvatedRouteStub = new ActivatedRouteStub();

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AccountListComponent, RouterLinkStubDirective],
        providers: [ AccountService,
          { provide: ActivatedRoute, useValue: actvatedRouteStub }
        ],
        imports: [ MatTableModule, MatPaginatorModule, BrowserAnimationsModule, HttpClientModule, HttpClientTestingModule ]
      }).compileComponents();

      fixture = TestBed.createComponent(AccountListComponent);
      component = fixture.componentInstance;

      // const accountServiceStub = fixture.debugElement.injector.get(AccountService);
      // const spy = spyOn(accountServiceStub, 'getAccountsByCompany').and.returnValue(Observable.of([]));
    })
  );

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

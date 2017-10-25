import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardModule, MatButtonModule, MatRippleModule } from '@angular/material';
import { AccountService } from '../services/account.service';
import { ActivatedRoute, ActivatedRouteStub } from '../testing/router-stubs.spec';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AccountComponent } from './account.component';
import { IAccountViewModel } from '../models/account';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  const actvatedRouteStub = new ActivatedRouteStub();

  beforeEach(
    async(() => {
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
      const spy = spyOn(accountServiceStub, 'getAccount').and.returnValue(Observable.of({}));
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

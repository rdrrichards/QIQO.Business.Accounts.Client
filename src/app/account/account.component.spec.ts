import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import {
  MatCardTitle,
  MatCard,
  MatCardSubtitle,
  MatCardHeader,
  MatCardContent,
  MatCardActions,
  MatButton,
  MatRipple
} from '@angular/material';
import { AccountService } from '../services/account.service';
import { ActivatedRoute, ActivatedRouteStub } from '../testing/router-stubs';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
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
        declarations: [
          AccountComponent,
          MatCard,
          MatCardTitle,
          MatCardSubtitle,
          MatCardHeader,
          MatCardContent,
          MatCardActions,
          MatButton,
          MatRipple
        ],
        providers: [
          { provide: AccountService, useValue: accountServiceStub },
          { provide: ActivatedRoute, useValue: actvatedRouteStub }
        ]
      }).compileComponents();
      const spy = spyOn(accountServiceStub, 'getAccount').and.callThrough();
      // const spay = spyOn(actvatedRouteStub, 'params').and.callThrough();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

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

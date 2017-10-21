import { async, TestBed } from '@angular/core/testing';

import { AccountDataSource } from './account.datasource';

import 'rxjs/add/observable/of';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AccountService } from '../services/account.service';
import { MatPaginator, MatPaginatorModule, MatPaginatorIntl } from '@angular/material';

describe('AccountDataSource', () => {
  let component: AccountDataSource;
  const accountServiceStub = new AccountService(
    new HttpClient({
      handle: (req: HttpRequest<any>): Observable<HttpEvent<any>> => {
        return Observable.of(<HttpEvent<any>>{});
      }
    })
  );
  const matPaginatorStub = new MatPaginator(new MatPaginatorIntl(), null);

  beforeEach(() => {
    component = new AccountDataSource(accountServiceStub, 1, matPaginatorStub);
    // fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('connect should return something', () => {
    expect(component.connect()).toBeTruthy();
  });

  it('disconnect should return void', () => {
    expect(component.disconnect()).toBeUndefined();
  });
});

import { TestBed, async } from '@angular/core/testing';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { AccountService } from './account.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('AccountService', () => {
  let service: AccountService;

  beforeEach(
    async(() => {
      const httpClientMock = new HttpClient({
        handle: (req: HttpRequest<any>): Observable<HttpEvent<any>> => {
          return Observable.of(<HttpEvent<any>>{});
        }
      });
      service = new AccountService(httpClientMock);
      spyOn(httpClientMock, 'get').and.returnValue([]);
      // spyOn(service, 'getAccount').and.returnValue(null);
    })
  );

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('getAccount should return something', () => {
    expect(service.getAccount(1)).toBeDefined();
  });

  it('getAccountsByCompany should return something', () => {
    expect(service.getAccountsByCompany(1)).toBeDefined();
  });

  it('data should return something', () => {
    expect(service.data).toBeDefined();
  });
});

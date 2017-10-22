import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpRequest, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AccountService } from './account.service';

describe('AccountService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, HttpClientTestingModule ],
      providers: [ AccountService ]
    });
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it(`should create`, async(inject([AccountService, HttpTestingController],
    (service: AccountService, backend: HttpTestingController) => {
      expect(service).toBeTruthy();
  })));

  it(`getAccount should return something`, async(inject([AccountService, HttpTestingController],
    (service: AccountService, backend: HttpTestingController) => {
      expect(service.getAccount(1)).toBeTruthy();
  })));

  it(`getAccountsByCompany should return something`, async(inject([AccountService, HttpTestingController],
    (service: AccountService, backend: HttpTestingController) => {
      expect(service.getAccountsByCompany(1)).toBeTruthy();
  })));

  it(`data should return something`, async(inject([AccountService, HttpTestingController],
    (service: AccountService, backend: HttpTestingController) => {
      expect(service.data).toBeTruthy();
  })));
});

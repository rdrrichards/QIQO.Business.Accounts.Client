import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AccountService } from './account.service';

describe('AccountService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ AccountService ]
    });
  });

  afterEach(inject([HttpTestingController], (httpClient: HttpTestingController) => {
    httpClient.verify();
  }));

  it(`should create`, async(inject([AccountService, HttpTestingController],
    (service: AccountService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
  })));

  it(`getAccount should return something`, async(inject([AccountService, HttpTestingController],
    (service: AccountService, httpClient: HttpTestingController) => {
      expect(service.getAccount(1)).toBeTruthy();
  })));

  it(`getAccountsByCompany should return something`, async(inject([AccountService, HttpTestingController],
    (service: AccountService, httpClient: HttpTestingController) => {
      expect(service.getAccountsByCompany(1)).toBeTruthy();
  })));

  it(`data should return something`, async(inject([AccountService, HttpTestingController],
    (service: AccountService, httpClient: HttpTestingController) => {
      expect(service.data).toBeTruthy();
  })));
});

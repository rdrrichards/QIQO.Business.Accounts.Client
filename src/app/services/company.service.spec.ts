import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CompanyService } from './company.service';

describe('CompanyService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ CompanyService ]
    });
  });

  afterEach(inject([HttpTestingController], (httpClient: HttpTestingController) => {
    httpClient.verify();
  }));

  it(`should create`, waitForAsync(inject([CompanyService, HttpTestingController],
    (service: CompanyService, httpClient: HttpTestingController) => {
      expect(service).toBeTruthy();
  })));

  it(`getAllCompanies should return something`, waitForAsync(inject([CompanyService, HttpTestingController],
    (service: CompanyService, httpClient: HttpTestingController) => {
      expect(service.getAllCompanies()).toBeTruthy();
  })));

});

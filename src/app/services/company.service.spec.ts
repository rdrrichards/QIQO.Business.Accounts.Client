import { TestBed, async } from '@angular/core/testing';
import { CompanyService } from './company.service';

describe('CompanyService', () => {
  let service: CompanyService;

  beforeEach(
    async(() => {
      service = new CompanyService(null);
    })
  );

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});

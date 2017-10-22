import { TestBed, async } from '@angular/core/testing';
import { AddressService } from './address.service';

describe('AddressService', () => {
  let service: AddressService;

  beforeEach(
    async(() => {
      service = new AddressService();
    })
  );

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});

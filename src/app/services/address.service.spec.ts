import { TestBed, waitForAsync } from '@angular/core/testing';
import { AddressService } from './address.service';

describe('AddressService', () => {
  let service: AddressService;

  beforeEach(
    waitForAsync(() => {
      service = new AddressService();
    })
  );

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});

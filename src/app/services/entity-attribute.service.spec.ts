import { TestBed, waitForAsync } from '@angular/core/testing';
import { EntityAttributeService } from './entity-attribute.service';

describe('EntityAttributeService', () => {
  let service: EntityAttributeService;

  beforeEach(
    waitForAsync(() => {
      service = new EntityAttributeService();
    })
  );

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, async } from '@angular/core/testing';
import { EntityAttributeService } from './entity-attribute.service';

describe('EntityAttributeService', () => {
  let service: EntityAttributeService;

  beforeEach(
    async(() => {
      service = new EntityAttributeService();
    })
  );

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, async } from '@angular/core/testing';
import { FeeScheduleService } from './fee-schedule.service';

describe('FeeScheduleService', () => {
  let service: FeeScheduleService;

  beforeEach(
    async(() => {
      service = new FeeScheduleService();
    })
  );

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});

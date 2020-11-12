import { TestBed, waitForAsync } from '@angular/core/testing';
import { FeeScheduleService } from './fee-schedule.service';

describe('FeeScheduleService', () => {
  let service: FeeScheduleService;

  beforeEach(
    waitForAsync(() => {
      service = new FeeScheduleService();
    })
  );

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});

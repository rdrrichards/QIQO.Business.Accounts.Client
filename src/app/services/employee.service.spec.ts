import { TestBed, waitForAsync } from '@angular/core/testing';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(
    waitForAsync(() => {
      service = new EmployeeService();
    })
  );

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});

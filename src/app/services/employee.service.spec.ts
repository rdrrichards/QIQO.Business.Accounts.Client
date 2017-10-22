import { TestBed, async } from '@angular/core/testing';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(
    async(() => {
      service = new EmployeeService();
    })
  );

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});

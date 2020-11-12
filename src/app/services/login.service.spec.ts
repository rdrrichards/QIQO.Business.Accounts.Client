import { TestBed, waitForAsync } from '@angular/core/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(
    waitForAsync(() => {
      service = new LoginService();
    })
  );

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});

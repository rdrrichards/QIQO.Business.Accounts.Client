import { TestBed, async } from '@angular/core/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(
    async(() => {
      service = new LoginService();
    })
  );

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});

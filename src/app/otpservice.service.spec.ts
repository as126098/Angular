import { TestBed } from '@angular/core/testing';

import { OTPServiceService } from './otpservice.service';

describe('OTPServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OTPServiceService = TestBed.get(OTPServiceService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sampleguardGuard } from './sampleguard.guard';

describe('sampleguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sampleguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

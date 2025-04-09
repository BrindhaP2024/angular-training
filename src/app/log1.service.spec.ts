import { TestBed } from '@angular/core/testing';

import { Log1Service } from './log1.service';

describe('Log1Service', () => {
  let service: Log1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Log1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ComputationService } from './computation.service';

describe('ComputationService', () => {
  let service: ComputationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LogicalService } from './logical.service';

describe('LogicalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogicalService = TestBed.get(LogicalService);
    expect(service).toBeTruthy();
  });
});

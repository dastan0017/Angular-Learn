import { TestBed } from '@angular/core/testing';

import { DebounceTimeService } from './debounce-time.service';

describe('DebounceTimeService', () => {
  let service: DebounceTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebounceTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

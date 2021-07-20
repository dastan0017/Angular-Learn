import { TestBed } from '@angular/core/testing';

import { NeighbourCommunicationService } from './neighbour-communication.service';

describe('NeighbourCommunicationService', () => {
  let service: NeighbourCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NeighbourCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

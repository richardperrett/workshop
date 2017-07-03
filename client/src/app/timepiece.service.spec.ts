import { TestBed, inject } from '@angular/core/testing';

import { TimepieceService } from './timepiece.service';

describe('TimepieceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimepieceService]
    });
  });

  it('should be created', inject([TimepieceService], (service: TimepieceService) => {
    expect(service).toBeTruthy();
  }));
});

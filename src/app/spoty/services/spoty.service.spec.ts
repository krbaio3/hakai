import { TestBed, inject } from '@angular/core/testing';

import { SpotyService } from './spoty.service';

describe('SpotyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotyService]
    });
  });

  it('should be created', inject([SpotyService], (service: SpotyService) => {
    expect(service).toBeTruthy();
  }));
});

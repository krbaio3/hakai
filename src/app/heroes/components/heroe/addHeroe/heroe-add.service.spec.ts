import { TestBed, inject } from '@angular/core/testing';

import { HeroeAddService } from './heroe-add.service';

describe('HeroeAddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroeAddService]
    });
  });

  it('should be created', inject([HeroeAddService], (service: HeroeAddService) => {
    expect(service).toBeTruthy();
  }));
});

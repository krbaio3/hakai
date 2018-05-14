import { TestBed, inject } from '@angular/core/testing';

import { ShowHeroeService } from './show-heroe.service';

describe('HeroeAddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowHeroeService]
    });
  });

  it('should be created', inject([ShowHeroeService], (service: ShowHeroeService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ShowHeroesService } from './show-heroes.service';

describe('HeroeAddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowHeroesService]
    });
  });

  it('should be created', inject([ShowHeroesService], (service: ShowHeroesService) => {
    expect(service).toBeTruthy();
  }));
});

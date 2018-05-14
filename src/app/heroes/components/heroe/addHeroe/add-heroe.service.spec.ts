import { TestBed, inject } from '@angular/core/testing';

import { AddHeroeService } from './add-heroe.service';

describe('HeroeAddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddHeroeService]
    });
  });

  it('should be created', inject([AddHeroeService], (service: AddHeroeService) => {
    expect(service).toBeTruthy();
  }));
});

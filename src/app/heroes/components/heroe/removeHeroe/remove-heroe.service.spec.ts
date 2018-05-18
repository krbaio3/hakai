import { TestBed, inject } from '@angular/core/testing';

import { RemoveHeroeService } from './remove-heroe.service';

describe('RemoveHeroeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoveHeroeService]
    });
  });

  it('should be created', inject([RemoveHeroeService], (service: RemoveHeroeService) => {
    expect(service).toBeTruthy();
  }));
});

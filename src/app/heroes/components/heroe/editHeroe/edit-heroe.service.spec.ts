import { TestBed, inject } from '@angular/core/testing';

import { EditHeroeService } from './edit-heroe.service';

describe('EditHeroeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditHeroeService]
    });
  });

  it('should be created', inject([EditHeroeService], (service: EditHeroeService) => {
    expect(service).toBeTruthy();
  }));
});

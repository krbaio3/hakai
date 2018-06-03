import { TestBed, inject } from '@angular/core/testing';

import { CargaImagenesService } from './carga-imagenes.service';

describe('CargaImagenesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CargaImagenesService]
    });
  });

  it('should be created', inject([CargaImagenesService], (service: CargaImagenesService) => {
    expect(service).toBeTruthy();
  }));
});

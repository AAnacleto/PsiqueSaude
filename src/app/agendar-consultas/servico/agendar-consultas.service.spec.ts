import { TestBed } from '@angular/core/testing';

import { AgendarConsultasService } from './agendar-consultas.service';

describe('AgendarConsultasService', () => {
  let service: AgendarConsultasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendarConsultasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

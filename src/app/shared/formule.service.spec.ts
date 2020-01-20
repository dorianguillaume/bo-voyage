import { TestBed } from '@angular/core/testing';

import { FormuleService } from './formule.service';

describe('VoyageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormuleService = TestBed.get(FormuleService);
    expect(service).toBeTruthy();
  });
});

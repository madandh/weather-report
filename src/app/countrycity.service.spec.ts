import { TestBed, inject } from '@angular/core/testing';

import { CountrycityService } from './countrycity.service';

describe('CountrycityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountrycityService]
    });
  });

  it('should be created', inject([CountrycityService], (service: CountrycityService) => {
    expect(service).toBeTruthy();
  }));
});

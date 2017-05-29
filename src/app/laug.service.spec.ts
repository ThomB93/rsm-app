import { TestBed, inject } from '@angular/core/testing';

import { LaugService } from './laug.service';

describe('LaugService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaugService]
    });
  });

  it('should be created', inject([LaugService], (service: LaugService) => {
    expect(service).toBeTruthy();
  }));
});

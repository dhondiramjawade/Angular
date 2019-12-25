import { TestBed } from '@angular/core/testing';

import { CFrameService } from './c-frame.service';

describe('CFrameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CFrameService = TestBed.get(CFrameService);
    expect(service).toBeTruthy();
  });
});

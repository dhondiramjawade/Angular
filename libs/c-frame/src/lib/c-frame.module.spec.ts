import { async, TestBed } from '@angular/core/testing';
import { CFrameModule } from './c-frame.module';

describe('CFrameModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CFrameModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CFrameModule).toBeDefined();
  });
});

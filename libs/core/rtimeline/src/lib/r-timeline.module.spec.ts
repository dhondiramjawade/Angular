import { async, TestBed } from '@angular/core/testing';
import { RTimelineModule } from './r-timeline.module';

describe('RTimelineModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RTimelineModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RTimelineModule).toBeDefined();
  });
});

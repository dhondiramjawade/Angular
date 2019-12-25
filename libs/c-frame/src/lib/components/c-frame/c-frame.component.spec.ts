import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CFrameComponent } from './c-frame.component';

describe('CFrameComponent', () => {
  let component: CFrameComponent;
  let fixture: ComponentFixture<CFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

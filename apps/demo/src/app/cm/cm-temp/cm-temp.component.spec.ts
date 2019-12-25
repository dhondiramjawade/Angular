import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmTempComponent } from './cm-temp.component';

describe('CmTempComponent', () => {
  let component: CmTempComponent;
  let fixture: ComponentFixture<CmTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

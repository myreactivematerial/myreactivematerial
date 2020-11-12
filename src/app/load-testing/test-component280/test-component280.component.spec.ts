import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent280Component } from './test-component280.component';

describe('TestComponent280Component', () => {
  let component: TestComponent280Component;
  let fixture: ComponentFixture<TestComponent280Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

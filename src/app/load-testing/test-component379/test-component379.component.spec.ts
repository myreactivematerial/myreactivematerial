import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent379Component } from './test-component379.component';

describe('TestComponent379Component', () => {
  let component: TestComponent379Component;
  let fixture: ComponentFixture<TestComponent379Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent379Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent379Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

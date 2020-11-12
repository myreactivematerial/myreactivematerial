import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent169Component } from './test-component169.component';

describe('TestComponent169Component', () => {
  let component: TestComponent169Component;
  let fixture: ComponentFixture<TestComponent169Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent169Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent169Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

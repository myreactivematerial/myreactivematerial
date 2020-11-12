import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent134Component } from './test-component134.component';

describe('TestComponent134Component', () => {
  let component: TestComponent134Component;
  let fixture: ComponentFixture<TestComponent134Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

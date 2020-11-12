import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent132Component } from './test-component132.component';

describe('TestComponent132Component', () => {
  let component: TestComponent132Component;
  let fixture: ComponentFixture<TestComponent132Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent132Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent132Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

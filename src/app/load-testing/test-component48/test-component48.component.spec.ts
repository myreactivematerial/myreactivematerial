import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent48Component } from './test-component48.component';

describe('TestComponent48Component', () => {
  let component: TestComponent48Component;
  let fixture: ComponentFixture<TestComponent48Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent48Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

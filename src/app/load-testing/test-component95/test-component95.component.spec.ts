import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent95Component } from './test-component95.component';

describe('TestComponent95Component', () => {
  let component: TestComponent95Component;
  let fixture: ComponentFixture<TestComponent95Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent95Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

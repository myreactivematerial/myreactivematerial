import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent9Component } from './test-component9.component';

describe('TestComponent9Component', () => {
  let component: TestComponent9Component;
  let fixture: ComponentFixture<TestComponent9Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

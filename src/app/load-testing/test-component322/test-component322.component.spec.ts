import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent322Component } from './test-component322.component';

describe('TestComponent322Component', () => {
  let component: TestComponent322Component;
  let fixture: ComponentFixture<TestComponent322Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent322Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent322Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

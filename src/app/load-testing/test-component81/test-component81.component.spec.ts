import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent81Component } from './test-component81.component';

describe('TestComponent81Component', () => {
  let component: TestComponent81Component;
  let fixture: ComponentFixture<TestComponent81Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent81Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

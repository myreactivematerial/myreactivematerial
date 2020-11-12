import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent38Component } from './test-component38.component';

describe('TestComponent38Component', () => {
  let component: TestComponent38Component;
  let fixture: ComponentFixture<TestComponent38Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent38Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

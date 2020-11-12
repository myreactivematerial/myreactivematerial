import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent2Component } from './test-component2.component';

describe('TestComponent2Component', () => {
  let component: TestComponent2Component;
  let fixture: ComponentFixture<TestComponent2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

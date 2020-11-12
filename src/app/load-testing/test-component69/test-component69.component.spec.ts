import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent69Component } from './test-component69.component';

describe('TestComponent69Component', () => {
  let component: TestComponent69Component;
  let fixture: ComponentFixture<TestComponent69Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent69Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

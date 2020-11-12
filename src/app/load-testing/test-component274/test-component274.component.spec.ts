import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent274Component } from './test-component274.component';

describe('TestComponent274Component', () => {
  let component: TestComponent274Component;
  let fixture: ComponentFixture<TestComponent274Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent274Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

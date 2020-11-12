import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent238Component } from './test-component238.component';

describe('TestComponent238Component', () => {
  let component: TestComponent238Component;
  let fixture: ComponentFixture<TestComponent238Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent238Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent238Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

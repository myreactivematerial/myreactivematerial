import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent33Component } from './test-component33.component';

describe('TestComponent33Component', () => {
  let component: TestComponent33Component;
  let fixture: ComponentFixture<TestComponent33Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

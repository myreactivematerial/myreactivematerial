import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent223Component } from './test-component223.component';

describe('TestComponent223Component', () => {
  let component: TestComponent223Component;
  let fixture: ComponentFixture<TestComponent223Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent223Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent223Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

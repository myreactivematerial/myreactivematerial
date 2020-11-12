import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent331Component } from './test-component331.component';

describe('TestComponent331Component', () => {
  let component: TestComponent331Component;
  let fixture: ComponentFixture<TestComponent331Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

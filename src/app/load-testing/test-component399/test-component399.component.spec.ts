import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent399Component } from './test-component399.component';

describe('TestComponent399Component', () => {
  let component: TestComponent399Component;
  let fixture: ComponentFixture<TestComponent399Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent399Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

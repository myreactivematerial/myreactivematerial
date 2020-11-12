import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent289Component } from './test-component289.component';

describe('TestComponent289Component', () => {
  let component: TestComponent289Component;
  let fixture: ComponentFixture<TestComponent289Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent289Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

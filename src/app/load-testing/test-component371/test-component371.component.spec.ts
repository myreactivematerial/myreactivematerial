import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent371Component } from './test-component371.component';

describe('TestComponent371Component', () => {
  let component: TestComponent371Component;
  let fixture: ComponentFixture<TestComponent371Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent371Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

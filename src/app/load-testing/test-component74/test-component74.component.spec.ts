import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent74Component } from './test-component74.component';

describe('TestComponent74Component', () => {
  let component: TestComponent74Component;
  let fixture: ComponentFixture<TestComponent74Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent74Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

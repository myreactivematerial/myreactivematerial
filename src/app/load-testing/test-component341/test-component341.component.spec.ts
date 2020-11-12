import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent341Component } from './test-component341.component';

describe('TestComponent341Component', () => {
  let component: TestComponent341Component;
  let fixture: ComponentFixture<TestComponent341Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent341Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent341Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

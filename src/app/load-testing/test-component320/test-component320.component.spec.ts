import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent320Component } from './test-component320.component';

describe('TestComponent320Component', () => {
  let component: TestComponent320Component;
  let fixture: ComponentFixture<TestComponent320Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

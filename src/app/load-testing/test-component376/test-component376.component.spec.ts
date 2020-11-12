import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent376Component } from './test-component376.component';

describe('TestComponent376Component', () => {
  let component: TestComponent376Component;
  let fixture: ComponentFixture<TestComponent376Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent376Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent376Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent161Component } from './test-component161.component';

describe('TestComponent161Component', () => {
  let component: TestComponent161Component;
  let fixture: ComponentFixture<TestComponent161Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

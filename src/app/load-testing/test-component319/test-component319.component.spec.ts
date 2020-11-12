import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent319Component } from './test-component319.component';

describe('TestComponent319Component', () => {
  let component: TestComponent319Component;
  let fixture: ComponentFixture<TestComponent319Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

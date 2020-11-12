import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent57Component } from './test-component57.component';

describe('TestComponent57Component', () => {
  let component: TestComponent57Component;
  let fixture: ComponentFixture<TestComponent57Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent57Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

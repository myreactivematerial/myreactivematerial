import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent44Component } from './test-component44.component';

describe('TestComponent44Component', () => {
  let component: TestComponent44Component;
  let fixture: ComponentFixture<TestComponent44Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent44Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

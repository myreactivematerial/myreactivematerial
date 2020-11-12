import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent221Component } from './test-component221.component';

describe('TestComponent221Component', () => {
  let component: TestComponent221Component;
  let fixture: ComponentFixture<TestComponent221Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

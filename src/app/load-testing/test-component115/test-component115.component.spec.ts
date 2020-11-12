import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent115Component } from './test-component115.component';

describe('TestComponent115Component', () => {
  let component: TestComponent115Component;
  let fixture: ComponentFixture<TestComponent115Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent374Component } from './test-component374.component';

describe('TestComponent374Component', () => {
  let component: TestComponent374Component;
  let fixture: ComponentFixture<TestComponent374Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent374Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

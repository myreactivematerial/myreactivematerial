import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent76Component } from './test-component76.component';

describe('TestComponent76Component', () => {
  let component: TestComponent76Component;
  let fixture: ComponentFixture<TestComponent76Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent76Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

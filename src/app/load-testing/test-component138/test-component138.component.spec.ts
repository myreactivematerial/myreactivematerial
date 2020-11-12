import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent138Component } from './test-component138.component';

describe('TestComponent138Component', () => {
  let component: TestComponent138Component;
  let fixture: ComponentFixture<TestComponent138Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

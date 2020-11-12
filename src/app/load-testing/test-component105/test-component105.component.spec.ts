import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent105Component } from './test-component105.component';

describe('TestComponent105Component', () => {
  let component: TestComponent105Component;
  let fixture: ComponentFixture<TestComponent105Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

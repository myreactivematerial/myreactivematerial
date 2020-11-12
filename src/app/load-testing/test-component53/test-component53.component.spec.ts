import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent53Component } from './test-component53.component';

describe('TestComponent53Component', () => {
  let component: TestComponent53Component;
  let fixture: ComponentFixture<TestComponent53Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent53Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

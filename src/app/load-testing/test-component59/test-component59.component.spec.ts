import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent59Component } from './test-component59.component';

describe('TestComponent59Component', () => {
  let component: TestComponent59Component;
  let fixture: ComponentFixture<TestComponent59Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent59Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

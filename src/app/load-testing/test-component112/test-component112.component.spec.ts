import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent112Component } from './test-component112.component';

describe('TestComponent112Component', () => {
  let component: TestComponent112Component;
  let fixture: ComponentFixture<TestComponent112Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

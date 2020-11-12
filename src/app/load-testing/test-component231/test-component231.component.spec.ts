import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent231Component } from './test-component231.component';

describe('TestComponent231Component', () => {
  let component: TestComponent231Component;
  let fixture: ComponentFixture<TestComponent231Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

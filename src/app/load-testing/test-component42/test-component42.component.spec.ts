import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent42Component } from './test-component42.component';

describe('TestComponent42Component', () => {
  let component: TestComponent42Component;
  let fixture: ComponentFixture<TestComponent42Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent42Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent24Component } from './test-component24.component';

describe('TestComponent24Component', () => {
  let component: TestComponent24Component;
  let fixture: ComponentFixture<TestComponent24Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent29Component } from './test-component29.component';

describe('TestComponent29Component', () => {
  let component: TestComponent29Component;
  let fixture: ComponentFixture<TestComponent29Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

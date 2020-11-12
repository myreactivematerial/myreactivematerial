import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent353Component } from './test-component353.component';

describe('TestComponent353Component', () => {
  let component: TestComponent353Component;
  let fixture: ComponentFixture<TestComponent353Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

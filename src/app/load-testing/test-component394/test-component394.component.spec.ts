import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent394Component } from './test-component394.component';

describe('TestComponent394Component', () => {
  let component: TestComponent394Component;
  let fixture: ComponentFixture<TestComponent394Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent394Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

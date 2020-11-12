import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent127Component } from './test-component127.component';

describe('TestComponent127Component', () => {
  let component: TestComponent127Component;
  let fixture: ComponentFixture<TestComponent127Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

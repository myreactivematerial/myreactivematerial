import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent157Component } from './test-component157.component';

describe('TestComponent157Component', () => {
  let component: TestComponent157Component;
  let fixture: ComponentFixture<TestComponent157Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

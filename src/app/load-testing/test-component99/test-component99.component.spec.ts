import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent99Component } from './test-component99.component';

describe('TestComponent99Component', () => {
  let component: TestComponent99Component;
  let fixture: ComponentFixture<TestComponent99Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent99Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

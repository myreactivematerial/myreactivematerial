import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent91Component } from './test-component91.component';

describe('TestComponent91Component', () => {
  let component: TestComponent91Component;
  let fixture: ComponentFixture<TestComponent91Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent91Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

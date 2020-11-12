import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent174Component } from './test-component174.component';

describe('TestComponent174Component', () => {
  let component: TestComponent174Component;
  let fixture: ComponentFixture<TestComponent174Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

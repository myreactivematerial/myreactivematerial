import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent14Component } from './test-component14.component';

describe('TestComponent14Component', () => {
  let component: TestComponent14Component;
  let fixture: ComponentFixture<TestComponent14Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

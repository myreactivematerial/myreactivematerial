import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent61Component } from './test-component61.component';

describe('TestComponent61Component', () => {
  let component: TestComponent61Component;
  let fixture: ComponentFixture<TestComponent61Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent61Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

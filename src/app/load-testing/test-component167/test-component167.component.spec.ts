import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent167Component } from './test-component167.component';

describe('TestComponent167Component', () => {
  let component: TestComponent167Component;
  let fixture: ComponentFixture<TestComponent167Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

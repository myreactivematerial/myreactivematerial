import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent173Component } from './test-component173.component';

describe('TestComponent173Component', () => {
  let component: TestComponent173Component;
  let fixture: ComponentFixture<TestComponent173Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

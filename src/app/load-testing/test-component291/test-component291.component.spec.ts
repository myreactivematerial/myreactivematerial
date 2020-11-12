import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent291Component } from './test-component291.component';

describe('TestComponent291Component', () => {
  let component: TestComponent291Component;
  let fixture: ComponentFixture<TestComponent291Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent291Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

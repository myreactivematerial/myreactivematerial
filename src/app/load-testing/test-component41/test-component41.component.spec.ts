import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent41Component } from './test-component41.component';

describe('TestComponent41Component', () => {
  let component: TestComponent41Component;
  let fixture: ComponentFixture<TestComponent41Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent239Component } from './test-component239.component';

describe('TestComponent239Component', () => {
  let component: TestComponent239Component;
  let fixture: ComponentFixture<TestComponent239Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent239Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent239Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent135Component } from './test-component135.component';

describe('TestComponent135Component', () => {
  let component: TestComponent135Component;
  let fixture: ComponentFixture<TestComponent135Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

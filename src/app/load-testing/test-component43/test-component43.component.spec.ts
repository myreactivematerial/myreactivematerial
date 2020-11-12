import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent43Component } from './test-component43.component';

describe('TestComponent43Component', () => {
  let component: TestComponent43Component;
  let fixture: ComponentFixture<TestComponent43Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent43Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

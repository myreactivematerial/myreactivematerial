import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent297Component } from './test-component297.component';

describe('TestComponent297Component', () => {
  let component: TestComponent297Component;
  let fixture: ComponentFixture<TestComponent297Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent297Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

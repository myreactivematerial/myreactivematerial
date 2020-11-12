import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent328Component } from './test-component328.component';

describe('TestComponent328Component', () => {
  let component: TestComponent328Component;
  let fixture: ComponentFixture<TestComponent328Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent328Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

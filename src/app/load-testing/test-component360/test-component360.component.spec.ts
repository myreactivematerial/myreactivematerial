import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent360Component } from './test-component360.component';

describe('TestComponent360Component', () => {
  let component: TestComponent360Component;
  let fixture: ComponentFixture<TestComponent360Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

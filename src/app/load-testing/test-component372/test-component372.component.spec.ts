import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent372Component } from './test-component372.component';

describe('TestComponent372Component', () => {
  let component: TestComponent372Component;
  let fixture: ComponentFixture<TestComponent372Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent372Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

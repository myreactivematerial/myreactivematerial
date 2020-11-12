import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent30Component } from './test-component30.component';

describe('TestComponent30Component', () => {
  let component: TestComponent30Component;
  let fixture: ComponentFixture<TestComponent30Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

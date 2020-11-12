import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent201Component } from './test-component201.component';

describe('TestComponent201Component', () => {
  let component: TestComponent201Component;
  let fixture: ComponentFixture<TestComponent201Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

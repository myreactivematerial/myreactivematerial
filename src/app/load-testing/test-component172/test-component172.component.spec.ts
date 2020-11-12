import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent172Component } from './test-component172.component';

describe('TestComponent172Component', () => {
  let component: TestComponent172Component;
  let fixture: ComponentFixture<TestComponent172Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

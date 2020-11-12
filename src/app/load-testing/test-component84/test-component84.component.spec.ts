import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent84Component } from './test-component84.component';

describe('TestComponent84Component', () => {
  let component: TestComponent84Component;
  let fixture: ComponentFixture<TestComponent84Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent84Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

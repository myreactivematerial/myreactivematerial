import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent63Component } from './test-component63.component';

describe('TestComponent63Component', () => {
  let component: TestComponent63Component;
  let fixture: ComponentFixture<TestComponent63Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent63Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent159Component } from './test-component159.component';

describe('TestComponent159Component', () => {
  let component: TestComponent159Component;
  let fixture: ComponentFixture<TestComponent159Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent159Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

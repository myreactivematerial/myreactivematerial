import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestComponent190Component } from './test-component190.component';

describe('TestComponent190Component', () => {
  let component: TestComponent190Component;
  let fixture: ComponentFixture<TestComponent190Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
